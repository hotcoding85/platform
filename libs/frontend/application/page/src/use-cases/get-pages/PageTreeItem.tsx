import BuildOutlined from '@ant-design/icons/BuildOutlined'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import EditOutlined from '@ant-design/icons/EditOutlined'
import FileOutlined from '@ant-design/icons/FileOutlined'
import FileTextOutlined from '@ant-design/icons/FileTextOutlined'
import LockFilled from '@ant-design/icons/lib/icons/LockFilled'
import LoadingOutlined from '@ant-design/icons/LoadingOutlined'
import SafetyOutlined from '@ant-design/icons/SafetyOutlined'
import ToolOutlined from '@ant-design/icons/ToolOutlined'
import type {
  IAppModel,
  IPageNodeData,
  ITreeNode,
} from '@codelab/frontend/abstract/domain'
import { pageRef, redirectRef } from '@codelab/frontend/abstract/domain'
import {
  ExplorerPaneType,
  MODEL_ACTION,
  PageType,
} from '@codelab/frontend/abstract/types'
import { useRegeneratePages } from '@codelab/frontend/application/domain'
import { useStore } from '@codelab/frontend/application/shared/store'
import type { ToolbarItem } from '@codelab/frontend/presentation/codelab-ui'
import {
  CuiTreeItem,
  CuiTreeItemToolbar,
  useCui,
} from '@codelab/frontend/presentation/codelab-ui'
import { IPageKind } from '@codelab/shared/abstract/core'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import React from 'react'

interface PageTreeItemProps {
  app: IAppModel
  data: ITreeNode<IPageNodeData>
}

export const PageTreeItem = observer(
  ({
    app,
    data: {
      extraData: { node: page },
      primaryTitle,
    },
  }: PageTreeItemProps) => {
    const { appService, pageService, redirectService, userService } = useStore()
    const { isRegenerating, regenerate } = useRegeneratePages(appService)
    const { popover } = useCui()
    const router = useRouter()

    const commonToolbarItems: Array<ToolbarItem> = [
      {
        cuiKey: MODEL_ACTION.OpenBuilderBuilder.key,
        icon: <BuildOutlined />,
        onClick: () => {
          void router.push({
            pathname: PageType.PageBuilder,
            query: {
              ...router.query,
              pageSlug: page.slug,
              primarySidebarKey: ExplorerPaneType.Explorer,
              userSlug: userService.user.username,
            },
          })
        },
        title: 'Open Builder',
      },
    ]

    const regularPageToolbarItems: Array<ToolbarItem> = [
      {
        cuiKey: MODEL_ACTION.DeletePage.key,
        icon: <DeleteOutlined />,
        onClick: () => pageService.deleteModal.open(pageRef(page)),
        title: 'Delete',
      },
      {
        cuiKey: page.redirect
          ? MODEL_ACTION.UpdateRedirect.key
          : MODEL_ACTION.CreateRedirect.key,
        icon: <SafetyOutlined />,
        onClick: () => {
          if (page.redirect) {
            redirectService.updateForm.open(redirectRef(page.redirect.id))
            popover.open(MODEL_ACTION.UpdateRedirect.key)
          } else {
            redirectService.createForm.open(pageRef(page))
            popover.open(MODEL_ACTION.CreateRedirect.key)
          }
        },
        title: 'Auth Guard',
      },
      {
        cuiKey: MODEL_ACTION.BuildApp.key,
        icon: isRegenerating ? <LoadingOutlined /> : <ToolOutlined />,
        onClick: () => regenerate(app, [page.urlPattern]),
        title: 'Build',
      },
      {
        cuiKey: MODEL_ACTION.UpdatePage.key,
        icon: <EditOutlined />,
        onClick: () => {
          pageService.updateForm.open(pageRef(page))
          popover.open(MODEL_ACTION.UpdatePage.key)
        },
        title: 'Edit',
      },
    ]

    const toolbarItems: Array<ToolbarItem> =
      page.kind === IPageKind.Regular
        ? [...regularPageToolbarItems, ...commonToolbarItems]
        : [...commonToolbarItems]

    return (
      <CuiTreeItem
        icon={
          page.kind === IPageKind.Regular ? (
            <>
              {page.redirect?.id && <LockFilled style={{ color: 'green' }} />}
              <FileTextOutlined style={{ color: 'blue' }} />
            </>
          ) : (
            <FileOutlined style={{ color: 'black' }} />
          )
        }
        primaryTitle={primaryTitle}
        toolbar={
          <CuiTreeItemToolbar items={toolbarItems} title="page toolbar" />
        }
      />
    )
  },
)
