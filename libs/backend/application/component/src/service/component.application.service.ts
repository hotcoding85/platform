import { ComponentRepository } from '@codelab/backend/domain/component'
import { Span } from '@codelab/backend/infra/adapter/otel'
import type { IComponent } from '@codelab/shared/abstract/core'
import { IRole } from '@codelab/shared/abstract/core'
import { Injectable } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import { ExportComponentCommand } from '../use-case'

@Injectable()
export class ComponentApplicationService {
  constructor(
    private componentRepository: ComponentRepository,
    private commandBus: CommandBus,
  ) {}

  /**
   * Export all components owned by admins
   */
  @Span()
  async exportComponentsForAdmin(): Promise<Array<IComponent>> {
    const components = await this.componentRepository.find({
      where: {
        owner: {
          roles_INCLUDES: IRole.Admin,
        },
      },
    })

    const results: Array<IComponent> = []

    for (const component of components) {
      const result = await this.commandBus.execute<
        ExportComponentCommand,
        IComponent
      >(new ExportComponentCommand(component.id))

      results.push(result)
    }

    return results
  }
}