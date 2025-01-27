import type { CodelabPage } from '@codelab/frontend/abstract/types'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { BuilderDndContext } from '../dnd'

export const BuilderViewLayout: CodelabPage['Layout'] = observer(
  ({ children }) => {
    return <BuilderDndContext>{children}</BuilderDndContext>
  },
)
