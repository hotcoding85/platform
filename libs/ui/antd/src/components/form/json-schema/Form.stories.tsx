import React from 'react'
import { FormEdge } from './Form-edge'
import { FormGraph } from './Form-graph'
import { FormVertex } from './Form-vertex'

export default {
  title: 'FormJson',
  parameters: {
    data: {},
  },
}

export const VertexForm = () => {
  return <FormVertex />
}

export const EdgeForm = () => {
  return <FormEdge />
}

export const GraphForm = () => {
  return <FormGraph />
}