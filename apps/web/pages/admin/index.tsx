import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { CodelabPage } from '@codelab/frontend/abstract/props'
import {
  ResetDataButton,
  SeedBaseTypesButton,
} from '@codelab/frontend/modules/admin'
import { ContentSection } from '@codelab/frontend/view/sections'
import {
  DashboardTemplate,
  SidebarNavigation,
} from '@codelab/frontend/view/templates'
import { PageHeader, Space } from 'antd'
import React from 'react'

const AdminPage: CodelabPage = () => {
  return (
    <>
      <PageHeader ghost={false} title="Admin" />
      <ContentSection>
        <Space>
          <ResetDataButton />
          <SeedBaseTypesButton />
        </Space>
      </ContentSection>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()

AdminPage.Template = DashboardTemplate
AdminPage.Header = null
AdminPage.MetaPane = null
AdminPage.MainPane = null
AdminPage.SidebarNavigation = SidebarNavigation

export default AdminPage
