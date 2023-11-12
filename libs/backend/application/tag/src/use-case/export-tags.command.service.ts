import type { TagWhere } from '@codelab/backend/abstract/codegen'
import { SortDirection } from '@codelab/backend/abstract/codegen'
import { TagRepository } from '@codelab/backend/domain/tag'
import { Span } from '@codelab/backend/infra/adapter/otel'
import type { ITag } from '@codelab/shared/abstract/core'
import type { ICommandHandler } from '@nestjs/cqrs'
import { CommandHandler } from '@nestjs/cqrs'

export class ExportTagsCommand {
  where?: TagWhere
}

@CommandHandler(ExportTagsCommand)
export class ExportTagsHandler
  implements ICommandHandler<ExportTagsCommand, Array<ITag>>
{
  constructor(private readonly tagRepository: TagRepository) {}

  @Span()
  async execute({ where }: ExportTagsCommand) {
    return (
      (
        await this.tagRepository.find({
          options: {
            sort: [{ name: SortDirection.Asc }],
          },
          where,
        })
      )
        // Sort children values
        .map((tag) => ({
          ...tag,
          children: tag.children.sort((a, b) => a.name.localeCompare(b.name)),
        }))
    )
  }
}