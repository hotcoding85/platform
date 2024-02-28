import { ImportAtomCommand } from '@codelab/backend/application/atom'
import { ImportComponentsCommand } from '@codelab/backend/application/component'
import type { IBaseDataPaths } from '@codelab/backend/application/data'
import { ReadAdminDataService } from '@codelab/backend/application/data'
import { ImportTagsCommand } from '@codelab/backend/application/tag'
import { ImportSystemTypesCommand } from '@codelab/backend/application/type'
import {
  Span,
  TraceService,
  withActiveSpan,
} from '@codelab/backend/infra/adapter/otel'
import { IAtomAggregate, Stage } from '@codelab/shared/abstract/core'
import { flattenWithPrefix } from '@codelab/shared/infra/otel'
import { CommandBus, CommandHandler, type ICommandHandler } from '@nestjs/cqrs'
import omit from 'lodash/omit'

export class ImportAdminDataCommand implements IBaseDataPaths {
  constructor(public baseDataPaths?: string) {}
}

/**
 * During `save`, we'll want to replace the owner with the current
 */
@CommandHandler(ImportAdminDataCommand)
export class ImportAdminDataHandler
  implements ICommandHandler<ImportAdminDataCommand, void>
{
  constructor(
    private readonly commandBus: CommandBus,
    private readonly traceService: TraceService,
    private readonly readAdminDataService: ReadAdminDataService,
  ) {}

  @Span()
  async execute({ baseDataPaths }: ImportAdminDataCommand) {
    if (baseDataPaths) {
      this.readAdminDataService.migrationDataService.basePaths = baseDataPaths
    }

    this.readAdminDataService.partiallySeed =
      process.env['NX_TASK_TARGET_CONFIGURATION'] === Stage.CI

    /**
     * System types must be seeded first, so other types can reference it
     */
    await this.importSystemTypes()

    await this.importTags()

    await this.importAtoms()

    await this.importComponents()
  }

  @Span()
  private async importAtom(atom: IAtomAggregate) {
    const span = this.traceService.getSpan()

    span?.setAttributes(flattenWithPrefix(atom))

    await this.commandBus.execute<ImportAtomCommand>(
      new ImportAtomCommand(atom),
    )
  }

  private async importAtoms() {
    const atoms = this.readAdminDataService.atoms

    /**
     * Create all atoms but omit `suggestedChildren`, since it requires all atoms to be added first
     */
    for (const atom of this.readAdminDataService.atoms) {
      const atomWithoutSuggestedChildren = omit(atom, ['suggestedChildren'])

      await withActiveSpan(`${atom.atom.name}`, () =>
        this.importAtom(atomWithoutSuggestedChildren as IAtomAggregate),
      )
    }

    /**
     * Here we assign suggestedChildren, since all atoms must be created first
     */
    const atomsWithSuggestedChildren = atoms.filter(
      ({ atom }) => atom.suggestedChildren?.length,
    )

    for (const atom of atomsWithSuggestedChildren) {
      await withActiveSpan(`${atom.atom.name}`, () => this.importAtom(atom))
    }
  }

  private async importComponents() {
    for (const component of this.readAdminDataService.components) {
      await this.commandBus.execute(new ImportComponentsCommand(component))
    }
  }

  @Span()
  private async importSystemTypes() {
    return this.commandBus.execute<ImportSystemTypesCommand>(
      new ImportSystemTypesCommand(),
    )
  }

  @Span()
  private async importTags() {
    const { tags } = this.readAdminDataService

    return this.commandBus.execute<ImportTagsCommand, void>(
      new ImportTagsCommand(tags),
    )
  }
}
