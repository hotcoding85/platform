import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined'
import BuildOutlined from '@ant-design/icons/BuildOutlined'
import CloudServerOutlined from '@ant-design/icons/CloudServerOutlined'
import CodeSandboxOutlined from '@ant-design/icons/CodeSandboxOutlined'
import FileOutlined from '@ant-design/icons/FileOutlined'
import SafetyOutlined from '@ant-design/icons/SafetyOutlined'
import { ExplorerPaneType, PageType } from '@codelab/frontend/abstract/types'
import type { NavigationBarItem } from '@codelab/frontend/presentation/codelab-ui'
import type { Nullish } from '@codelab/shared/abstract/types'
import React from 'react'

export const appMenuItem: NavigationBarItem = {
  icon: <AppstoreOutlined title="Apps" />,
  key: PageType.AppList,
  link: {
    href: PageType.AppList,
  },
  title: 'Apps',
}

export const resourceMenuItem: NavigationBarItem = {
  icon: <CloudServerOutlined title="Resources" />,
  key: PageType.Resources,
  link: {
    href: PageType.Resources,
  },
  title: 'Resources',
}

export const authGuardMenuItem: NavigationBarItem = {
  icon: <SafetyOutlined title="Auth Guards" />,
  key: PageType.AuthGuards,
  link: {
    href: PageType.AuthGuards,
  },
  title: 'Auth Guards',
}

export const allPagesMenuItem = (
  appSlug: Nullish<string>,
  pageSlug: Nullish<string>,
  userSlug: Nullish<string>,
): NavigationBarItem => ({
  disabled: !appSlug,
  icon: <FileOutlined title="Pages" />,
  key: ExplorerPaneType.PageList,
  link: {
    href: {
      pathname: PageType.PageBuilder,
      query: {
        appSlug,
        pageSlug,
        primarySidebarKey: ExplorerPaneType.PageList,
        userSlug,
      },
    },
  },
  title: 'Pages',
})

export const builderComponentsMenuItem = (
  appSlug: Nullish<string>,
  pageSlug: Nullish<string>,
  componentSlug: Nullish<string>,
  userSlug: Nullish<string>,
): NavigationBarItem => ({
  icon: <CodeSandboxOutlined title="Builder Components" />,
  key: 'components',
  link: {
    href: {
      pathname: pageSlug
        ? PageType.PageBuilder
        : componentSlug
        ? PageType.ComponentBuilder
        : PageType.Components,
      query: {
        ...(appSlug ? { appSlug } : null),
        ...(componentSlug ? { componentSlug } : null),
        ...(pageSlug ? { pageSlug } : null),
        primarySidebarKey: ExplorerPaneType.Components,
        ...(userSlug ? { userSlug } : null),
      },
    },
  },
  title: 'Builder Components',
})

export const pageBuilderMenuItem = (
  appSlug: Nullish<string>,
  pageSlug: Nullish<string>,
  componentSlug: Nullish<string>,
  userSlug: Nullish<string>,
): NavigationBarItem => ({
  disabled: !appSlug && !pageSlug && !componentSlug,
  icon: <BuildOutlined title="Builder" />,
  key: ExplorerPaneType.Explorer,
  link: {
    href: {
      pathname: pageSlug ? PageType.PageBuilder : PageType.ComponentBuilder,
      query: {
        ...(appSlug ? { appSlug } : null),
        ...(pageSlug ? { pageSlug } : null),
        ...(componentSlug ? { componentSlug } : null),
        primarySidebarKey: ExplorerPaneType.Explorer,
        ...(userSlug ? { userSlug } : null),
      },
    },
  },
  title: 'Builder',
})

export const commonMenuItems: Array<NavigationBarItem> = [
  appMenuItem,
  // {
  //   icon: <TagOutlined data-testid="tag-tab-trigger" title="Tags" />,
  //   key: PageType.Tag,
  //   label: <Link href={PageType.Tag}>Tags</Link>,
  // },
  // {
  //   icon: <FunctionOutlined title="Lambdas" />,
  //   key: PageType.LambdaList,
  //   label: <Link href={PageType.LambdaList}>Lambdas</Link>,
  // },
  // {
  //   icon: <BuildOutlined title="Components" />,
  //   key: PageType.ComponentList,
  //   label: <Link href={PageType.ComponentList}>Components</Link>,
  // },
]
