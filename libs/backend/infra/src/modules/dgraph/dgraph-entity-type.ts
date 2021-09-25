/**
 * All the Type definitions in the dgraph schema
 * Not calling it DgraphType, because it can get confused with our Type entity
 */
export enum DgraphEntityType {
  Tree = 'Tree',
  Page = 'Page',
  Tag = 'Tag',
  TagTree = 'TagTree',
  Component = 'Component',
  Library = 'Library',
  Node = 'Node',
  App = 'App',
  User = 'User',
  Element = 'Element',
  Atom = 'Atom',
  Type = 'Type',
  PrimitiveType = 'PrimitiveType',
  ArrayType = 'ArrayType',
  EnumTypeValue = 'EnumTypeValue',
  EnumType = 'EnumType',
  InterfaceType = 'InterfaceType',
  LambdaType = 'LambdaType',
  ElementType = 'ElementType',
  ComponentType = 'ComponentType',
  Field = 'Field',
  Prop = 'Prop',
  Lambda = 'Lambda',
  Hook = 'Hook',
  PropMapBinding = 'PropMapBinding',
}