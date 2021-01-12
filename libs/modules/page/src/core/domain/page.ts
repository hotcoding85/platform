import { Exclude, Type, plainToClass } from 'class-transformer'
import { NOID } from '../../../../../backend/src/core/domain/valueObject/NOID'
import { App } from '../../../../app/src/core/domain/app'
import { PageCreatedEvent } from '../application/useCases/createPage/PageCreatedEvent'
import { SerializedPageDto } from './dto/SerializedPageDto'
import { PageTitle } from './page-title'
import {
  AggregateRoot,
  TransformBoth,
  TypeOrmPage,
  UUID,
} from '@codelab/backend'

export class Page<ID extends UUID | NOID = UUID> extends AggregateRoot<
  SerializedPageDto,
  ID
> {
  @Type(() => PageTitle)
  @TransformBoth(PageTitle)
  declare title: PageTitle

  /* Without this crashes the app with TypeError
   *  const { constructor } = Object.getPrototypeOf(event);
   *  TypeError: Cannot convert undefined or null to object
   *  from default-get-event-name.js at cqrs/dist/helpers
   *  When using EventHandler to listen to an event, this object ends up with
   *  a publish property which crashes NodeJS during classToPlain conversion
   */
  @Exclude()
  publish: any

  createPage(app: App) {
    this.apply(new PageCreatedEvent(app, this as any))
  }

  toPersistence(): TypeOrmPage {
    return plainToClass(TypeOrmPage, this.toPlain())
  }
}