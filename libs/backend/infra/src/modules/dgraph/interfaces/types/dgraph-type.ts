import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphEntity } from '../core'
import { DgraphUser } from '../dgraph-user'

/**
 * A Type is a simple base entity that has an id and a name
 * Other types 'extend' it by having dgraph.type set to both Type and <Specific>Type
 */
export interface DgraphType<TType extends DgraphEntityType>
  extends DgraphEntity<[DgraphEntityType.Type, TType]> {
  name: string
  // null owner means it's admin created
  owner: DgraphUser | null
}