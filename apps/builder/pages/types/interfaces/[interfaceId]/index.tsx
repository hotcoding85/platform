import { auth0Instance } from '@codelab/backend'
import { CodelabPage } from '@codelab/frontend/abstract/types'
import {
  CreateFieldButton,
  CreateFieldModal,
  DeleteFieldModal,
  FieldsTable,
  UpdateFieldModal,
  useCurrentInterfaceId,
  useGetCurrentInterfaceWithFields,
} from '@codelab/frontend/modules/type'
import { useStore } from '@codelab/frontend/presenter/container'
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
import { ITypeKind } from '@codelab/shared/abstract/core'
import { PageHeader, Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const InterfaceDetailPage: CodelabPage<DashboardTemplateProps> = observer(
  () => {
    const { typeService } = useStore()
    const { type, isLoading } = useGetCurrentInterfaceWithFields(typeService)

    return (
      <>
        <Head>
          <title>{type?.name ? `${type.name} | ` : ''}Codelab</title>
        </Head>

        {type && type.kind === ITypeKind.InterfaceType && (
          <>
            <CreateFieldModal typeService={typeService} />
            <UpdateFieldModal typeService={typeService} />
            <DeleteFieldModal typeService={typeService} />
          </>
        )}

        <ContentSection>
          {isLoading ? (
            <Spin />
          ) : (
            <FieldsTable
              interfaceType={type}
              isLoading={isLoading}
              typeService={typeService}
            />
          )}
        </ContentSection>
      </>
    )
  },
)

const Header = observer(() => {
  const { typeService } = useStore()
  const interfaceId = useCurrentInterfaceId()
  const router = useRouter()
  const interfaceType = typeService.type(interfaceId)

  const headerButtons = [
    <CreateFieldButton
      interfaceId={interfaceId}
      key={0}
      typeService={typeService}
    />,
  ]

  return (
    <PageHeader
      extra={headerButtons}
      ghost={false}
      onBack={() => router.back()}
      title={interfaceType?.name}
    />
  )
})

export default InterfaceDetailPage

export const getServerSideProps = auth0Instance.withPageAuthRequired()

InterfaceDetailPage.Layout = observer((page) => {
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
})