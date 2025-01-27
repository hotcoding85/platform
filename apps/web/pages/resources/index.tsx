import {
  CreateResourceModal,
  DeleteResourceModal,
  type ResourcesView,
  ResourcesViewLayout,
  UpdateResourceForm,
  UpdateResourceModal,
} from '@codelab/frontend/application/resource'
import { withPageAuthRedirect } from '@codelab/frontend/application/shared/auth'
import { useStore } from '@codelab/frontend/application/shared/store'
import { ContentSection } from '@codelab/frontend/presentation/view'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import React from 'react'

const ResourcesView: ResourcesView = observer(() => {
  const { resourceService } = useStore()
  const resource = resourceService.updateForm.resource

  return (
    <>
      <Head>
        <title>Resources | Codelab</title>
      </Head>
      <ContentSection>
        <CreateResourceModal />
        <UpdateResourceModal />
        <DeleteResourceModal />

        {resource && <UpdateResourceForm />}
      </ContentSection>
    </>
  )
})

export default ResourcesView

export const getServerSideProps = withPageAuthRedirect()

ResourcesView.Layout = ResourcesViewLayout
