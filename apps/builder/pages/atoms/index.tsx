import { auth0Instance } from '@codelab/backend'
import { CodelabPage } from '@codelab/frontend/abstract/types'
import {
  CreateAtomButton,
  CreateAtomModal,
  DeleteAtomsModal,
  GetAtomsTable,
  UpdateAtomModal,
} from '@codelab/frontend/modules/atom'
import { useStore } from '@codelab/frontend/presenter/container'
import { useStatefulExecutor } from '@codelab/frontend/shared/utils'
import {
  adminMenuItems,
  allPagesMenuItem,
  appMenuItem,
  ContentSection,
  pageBuilderMenuItem,
  resourceMenuItem,
  storeMenuItem,
} from '@codelab/frontend/view/sections'
import {
  DashboardTemplate,
  DashboardTemplateProps,
  SidebarNavigation,
} from '@codelab/frontend/view/templates'
import { PageHeader } from 'antd'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import React from 'react'
import tw from 'twin.macro'

const AtomsPage: CodelabPage<DashboardTemplateProps> = () => {
  const store = useStore()

  const [, { isLoading }] = useStatefulExecutor(
    () => store.tagService.getAll(),
    {
      executeOnMount: true,
    },
  )

  return (
    <>
      <Head>
        <title>Atoms | Codelab</title>
      </Head>

      <CreateAtomModal
        atomService={store.atomService}
        tagService={store.tagService}
        userService={store.userService}
      />
      <UpdateAtomModal
        atomService={store.atomService}
        tagService={store.tagService}
      />
      <DeleteAtomsModal atomService={store.atomService} />
      <ContentSection>
        <GetAtomsTable atomService={store.atomService} />
      </ContentSection>
    </>
  )
}

const Header = () => {
  const store = useStore()

  const pageHeaderButtons = [
    <div
      css={tw`flex flex-row items-center justify-center gap-2`}
      key="export_import"
    >
      <CreateAtomButton atomService={store.atomService} key="create" />
    </div>,
  ]

  return <PageHeader extra={pageHeaderButtons} ghost={false} title="Atom" />
}

export default AtomsPage

export const getServerSideProps = auth0Instance.withPageAuthRequired({
  getServerSideProps: async ({ req, res }: GetServerSidePropsContext) => {
    // const store = initializeStore({ user })

    return {
      // props: { snapshot: getSnapshot(store) },
      props: {},
    }
  },
})

AtomsPage.Layout = (page) => {
  const { userService } = useStore()

  return (
    <DashboardTemplate
      Header={Header}
      SidebarNavigation={() => (
        <SidebarNavigation
          primaryItems={[
            appMenuItem,
            allPagesMenuItem(userService.user?.curAppId),
            pageBuilderMenuItem(
              userService.user?.curAppId,
              userService.user?.curPageId,
            ),
            storeMenuItem(userService.user?.curAppId),
            resourceMenuItem,
          ]}
          secondaryItems={adminMenuItems}
        />
      )}
    >
      {page.children}
    </DashboardTemplate>
  )
}