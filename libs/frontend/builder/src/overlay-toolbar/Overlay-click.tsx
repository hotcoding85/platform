import { DeleteOutlined } from '@ant-design/icons'
import {
  refetchGetAppPageQuery,
  useDeletePageElementMutation,
} from '@codelab/codegen/hasura'
import { AppPageContext, ComponentElementNode } from '@codelab/frontend/shared'
import { Button } from 'antd'
import React, { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { nodeToElementMapState } from '../renderer/nodeToElementMapState'
import { builderElementSelectionState } from '../selection'
import { OverlayToolbar } from './OverlayToolbar'

export const ClickOverlay = () => {
  const { pageId, appId } = useContext(AppPageContext)

  const [deletePageElement, { loading: deleteLoading }] =
    useDeletePageElementMutation({
      refetchQueries: [
        refetchGetAppPageQuery({
          pageId,
          appId,
        }),
      ],
    })

  const { map: nodeToElementMap } = useRecoilValue(nodeToElementMapState)
  const { selectedElement } = useRecoilValue(builderElementSelectionState)

  const { node, element } =
    nodeToElementMap && selectedElement && nodeToElementMap[selectedElement]
      ? nodeToElementMap[selectedElement]
      : { node: undefined, element: undefined }

  if (!element) {
    return null
  }

  return (
    <OverlayToolbar<ComponentElementNode>
      overlayElement={element}
      content={
        <div className="click-overlay-toolbar">
          <span>{node?.nodeType}</span>
          <div className="click-overlay-toolbar--button-group">
            <Button
              size="small"
              icon={<DeleteOutlined />}
              loading={deleteLoading}
              onClick={(e) => {
                e.stopPropagation()

                return deletePageElement({
                  variables: {
                    pageElementId: (node as any)?.pageElementId as string,
                  },
                })
              }}
            />
          </div>
        </div>
      }
    />
  )
}
