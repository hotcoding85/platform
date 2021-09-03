import { ElementTree } from '@codelab/frontend/abstract/props'
import {
  ComponentFragment,
  ElementFragment,
  ElementGraphFragment,
} from '@codelab/shared/codegen/graphql'
import { ElementGraphTreeAdapter } from './ElementGraphTreeAdapter'

/**
 * Parses a ElementGraph and provides a tree interface
 */
export const useElementTree = (
  graph?: ElementGraphFragment | null,
): ElementTree<ElementFragment | ComponentFragment> => {
  return new ElementGraphTreeAdapter(graph)
}