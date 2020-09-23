import { convertNodeTreeToAntTreeDataNode } from './convertNodeTreeToAntTreeNode'
import { NodeEntity } from '@codelab/core/node'

describe('convertNodeTreeToAntTreeNode. Single node without children', () => {
  let node: NodeEntity

  beforeAll(() => {
    node = new NodeEntity({ type: 'React.Alert', id: 'key' })
  })
  it('should convert id of the node to key of the antd tree node', () => {
    expect(convertNodeTreeToAntTreeDataNode(node).key).toBe(node.id)
  })
  it('should set title of tree node to node nodeType', () => {
    expect(convertNodeTreeToAntTreeDataNode(node).title).toBe(node.type)
  })
})

describe('convertNodeTreeToAntTreeNode. Node with child', () => {
  let parent: NodeEntity
  let child: NodeEntity
  let child2: NodeEntity
  let grandchild: NodeEntity

  beforeAll(() => {
    parent = new NodeEntity({ type: 'Tree', id: 'parent' })
    child = new NodeEntity({ type: 'Tree', id: 'child' })
    child2 = new NodeEntity({ type: 'Tree', id: 'child' })
    grandchild = new NodeEntity({ type: 'Tree', id: 'child' })
    parent.addChild(child)
    parent.addChild(child2)
    child.addChild(grandchild)
  })
  it('should create tree props from node with nested children', () => {
    const treeProps = convertNodeTreeToAntTreeDataNode(parent)

    expect(treeProps.children.find((c) => c.key === child.id)).toBeDefined()
    expect(treeProps.children.find((c) => c.key === child2.id)).toBeDefined()
    expect(
      treeProps.children
        .find((c) => c.key === child.id)
        .children.find((c) => c.key === grandchild.id),
    ).toBeDefined()
  })
})