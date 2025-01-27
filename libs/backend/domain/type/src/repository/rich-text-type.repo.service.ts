import type {
  RichTextType,
  RichTextTypeOptions,
  RichTextTypeWhere,
} from '@codelab/backend/abstract/codegen'
import { AuthDomainService } from '@codelab/backend/domain/shared/auth'
import { CodelabLoggerService } from '@codelab/backend/infra/adapter/logger'
import {
  exportRichTextTypeSelectionSet,
  OgmService,
} from '@codelab/backend/infra/adapter/neo4j'
import { ValidationService } from '@codelab/backend/infra/adapter/typebox'
import { AbstractRepository } from '@codelab/backend/infra/core'
import type { IRichTextTypeDto } from '@codelab/shared/abstract/core'
import { connectOwner } from '@codelab/shared/domain'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RichTextTypeRepository extends AbstractRepository<
  IRichTextTypeDto,
  RichTextType,
  RichTextTypeWhere,
  RichTextTypeOptions
> {
  constructor(
    private ogmService: OgmService,
    private authService: AuthDomainService,
    protected override validationService: ValidationService,
    protected override loggerService: CodelabLoggerService,
  ) {
    super(validationService, loggerService)
  }

  protected async _addMany(richTextTypes: Array<IRichTextTypeDto>) {
    return (
      await (
        await this.ogmService.RichTextType
      ).create({
        input: richTextTypes.map(({ __typename, ...richTextType }) => ({
          ...richTextType,
          owner: connectOwner(this.authService.currentUser),
        })),
      })
    ).richTextTypes
  }

  protected async _find({
    options,
    where,
  }: {
    where?: RichTextTypeWhere
    options?: RichTextTypeOptions
  }) {
    return await (
      await this.ogmService.RichTextType
    ).find({
      options,
      selectionSet: `{ ${exportRichTextTypeSelectionSet} }`,
      where,
    })
  }

  protected async _update(
    { __typename, id, name }: IRichTextTypeDto,
    where: RichTextTypeWhere,
  ) {
    return (
      await (
        await this.ogmService.RichTextType
      ).update({
        update: { name },
        where,
      })
    ).richTextTypes[0]
  }
}
