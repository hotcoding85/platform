import { Renderer } from '@codelab/core/renderer'
import type { NodeDtoReactI } from '@codelab/shared/interface/node'

const nodeButtonGroupData: NodeDtoReactI = {
  type: 'React.Html.div',
  children: [
    {
      type: 'React.Html.div',
      children: [
        {
          type: 'React.Text',
          props: { value: 'Current Selection: ' },
        },
        {
          type: 'React.Text',
          props: {
            value: {
              eval: true,
              value: 'return this.props.selectedNode',
            },
          },
        },
      ],
    },
    {
      type: 'React.Html.div',
      props: {
        style: {
          margin: '5px 0',
        },
      },
      children: [
        {
          type: 'React.Button',
          props: {
            type: 'primary',
            onClick: {
              eval: true,
              value: `return () => {
                  console.log(this.props);
                  this.props.setvisibility.value(true)
                }`,
            },
          },
          children: [
            {
              type: 'React.Text',
              props: {
                value: 'Show Create Node Form',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'React.Html.div',
      children: [
        {
          type: 'React.Button',
          props: {
            type: 'primary',
            onClick: {
              eval: true,
              value: `return () => {
                console.log(this.props)
                this.props.handledelete.value()
              }`,
            },
          },
          children: [
            {
              type: 'React.Text',
              props: {
                value: 'Delete Selected Node',
              },
            },
          ],
        },
      ],
    },
  ],
}

export interface ButtonGroupProps {
  setvisibility: Function
  handledelete: Function
}

export const ButtonGroup = Renderer.components<ButtonGroupProps>(
  nodeButtonGroupData,
)
