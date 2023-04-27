import { isServer } from '@codelab/shared/infra/config'
import React from 'react'
import type { OverlayProps } from './overlay.interface'
// import { queryRenderedElementById } from '../../renderer'
import { OverlayToolbar } from './OverlayToolbar'

export const HoverOverlay = ({
  content,
  getOverlayElement,
  nodeId,
}: OverlayProps) => {
  if (!nodeId || isServer) {
    return null
  }

  const element = getOverlayElement(nodeId)

  if (!element) {
    return null
  }

  return (
    <OverlayToolbar
      containerProps={{
        style: {
          border: '1px solid rgb(41, 205, 255)',
        },
      }}
      overlayElement={element}
      toolbarProps={{
        style: {
          background: 'transparent',
          color: 'rgb(41, 205, 255)',
        },
      }}
    >
      <div>{content}</div>
    </OverlayToolbar>
  )
}