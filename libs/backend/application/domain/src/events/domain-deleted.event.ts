import type { DomainDeletedSubscription } from '../graphql/domain.subscription.graphql.gen'

export const DOMAIN_DELETED_EVENT = 'domain.deleted'

export class DomainDeletedEvent {
  constructor(private subscription: DomainDeletedSubscription) {}
}