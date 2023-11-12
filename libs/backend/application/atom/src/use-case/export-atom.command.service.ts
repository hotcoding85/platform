import { type AtomWhere } from '@codelab/backend/abstract/codegen'
import { ExportApiCommand } from '@codelab/backend/application/type'
import { AtomRepository } from '@codelab/backend/domain/atom'
import { Span } from '@codelab/backend/infra/adapter/otel'
import type {
  IApi,
  IAtom,
  IAtomBoundedContext,
} from '@codelab/shared/abstract/core'
import type { ICommandHandler } from '@nestjs/cqrs'
import { CommandBus, CommandHandler } from '@nestjs/cqrs'

export class ExportAtomCommand {
  constructor(readonly where: AtomWhere) {}
}

@CommandHandler(ExportAtomCommand)
export class ExportAtomHandler
  implements ICommandHandler<ExportAtomCommand, IAtomBoundedContext>
{
  constructor(
    private readonly atomRepository: AtomRepository,
    private commandBus: CommandBus,
  ) {}

  @Span()
  async execute(command: ExportAtomCommand): Promise<IAtomBoundedContext> {
    const { where } = command
    const existingAtom = await this.atomRepository.findOne(where)

    if (!existingAtom) {
      throw new Error('Atom not found')
    }

    // this.traceService.getSpan()!.setAttributes({ atom: atom.name })

    const api = await this.commandBus.execute<ExportApiCommand, IApi>(
      new ExportApiCommand(existingAtom.api),
    )

    const atom: IAtom = {
      ...existingAtom,
      __typename: 'Atom' as const,
      api: { id: api.id },
      tags: existingAtom.tags.map((tag) => ({ id: tag.id })),
    }

    // const results: IAtom = this.validationService.validateAndClean(IAtom, data)

    return {
      api,
      atom,
    }
  }
}