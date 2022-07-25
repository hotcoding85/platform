import { cssMap, IElement } from '@codelab/shared/abstract/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { InputNumberWithUnits } from '../components/InputNumberWithUnits'
import {
  matchCssPropNumber,
  matchCssPropUnit,
  updateGuiCssProperty,
} from '../utils'

type PaddingEditorProps = {
  element: IElement
  guiCssObj: cssMap
}

const options = [
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
]

const units = ['px', '%', 'em', 'rem', 'ch', 'vh', 'vw']

export const PaddingEditor = observer(
  ({ element, guiCssObj }: PaddingEditorProps) => {
    return (
      <>
        {options.map((option) => (
          <InputNumberWithUnits
            currentUnit={matchCssPropUnit(guiCssObj[option] ?? '') ?? 'px'}
            currentValue={matchCssPropNumber(guiCssObj[option] ?? '') ?? 0}
            name={option}
            onChange={(value, unit) =>
              updateGuiCssProperty(element, option)(`${value}${unit}`)
            }
            units={units}
          />
        ))}
      </>
    )
  },
)