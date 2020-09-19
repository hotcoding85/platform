import { Text } from '../../text'
import { Form } from '../Form.types'
import { NodeDtoI } from '@codelab/shared/interface/node'
import { PropValue } from '@codelab/shared/interface/props'

export const formConditionData: NodeDtoI<
  Form.Props | Form.ItemProps | Text.Props | { shouldRender: PropValue }
> = {
  type: 'React.Form',
  props: {
    // name: 'form',
    initialValues: {},
    onFinish: '',
  },
  children: [
    {
      type: 'React.Form.Item',
      props: {
        label: 'Select Type',
        name: 'select_type',
      },
      children: [
        {
          type: 'React.Select',
          props: {
            style: {
              width: 120,
            },
          },
          children: [
            {
              type: 'React.Select.Option',
              props: {
                value: 'a',
              },
              children: [
                {
                  type: 'React.Text',
                  props: {
                    value: 'A',
                  },
                },
              ],
            },
            {
              type: 'React.Select.Option',
              props: {
                value: 'b',
              },
              children: [
                {
                  type: 'React.Text',
                  props: {
                    value: 'B',
                  },
                },
              ],
            },
            {
              type: 'React.Select.Option',
              props: {
                value: 'c',
              },
              children: [
                {
                  type: 'React.Text',
                  props: {
                    value: 'C',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'React.Form.ItemHook',
      props: {
        shouldUpdate: true,
        shouldRender: {
          eval: true,
          value: 'return (values) => values.select_type !== "a"',
        },
      },
      children: [
        {
          type: 'React.Form.Item',
          props: {
            label: 'Field A',
            name: 'a',
          },
          children: [{ type: 'React.Input', props: {} }],
        },
      ],
    },
    {
      type: 'React.Form.ItemHook',
      props: {
        shouldUpdate: true,
        shouldRender: {
          eval: true,
          value: 'return (values) => values.select_type !== "b"',
        },
      },
      children: [
        {
          type: 'React.Form.Item',
          props: {
            label: 'Field B',
            name: 'b',
          },
          children: [{ type: 'React.Input', props: {} }],
        },
      ],
    },
    {
      type: 'React.Form.ItemHook',
      props: {
        shouldUpdate: true,
        shouldRender: {
          eval: true,
          value: 'return (values) => values.select_type !== "c"',
        },
      },
      children: [
        {
          type: 'React.Form.Item',
          props: {
            label: 'Field C',
            name: 'c',
          },
          children: [{ type: 'React.Input', props: {} }],
        },
      ],
    },
  ],
}