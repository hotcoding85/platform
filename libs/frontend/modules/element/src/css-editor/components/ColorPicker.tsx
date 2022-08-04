import { Input } from 'antd'
import { useState } from 'react'
import { CssPropEditorItem } from './CssPropEditorItem'

type PropValueSelectorProps = {
  name: string
  currentValue: string
  onChange: (val: string) => void | undefined
  disabled?: boolean
  checked?: boolean
  enableCheckbox?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export const ColorPicker = ({
  name,
  currentValue,
  onChange,
  disabled,
  checked,
  enableCheckbox,
  onCheckedChange,
}: PropValueSelectorProps) => {
  const [color, setColor] = useState<string>(currentValue)

  return (
    <CssPropEditorItem
      defaultChecked={checked}
      enableCheckbox={enableCheckbox}
      onChange={onCheckedChange}
      title={name}
    >
      <Input
        defaultValue={color}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value)
          setColor(e.target.value)
        }}
        type="color"
        value={disabled ? '#D1D1D1' : color}
      />
    </CssPropEditorItem>
  )
}