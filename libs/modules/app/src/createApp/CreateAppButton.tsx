import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { EntityType, useCRUDModalForm } from '@codelab/frontend/shared'

export const CreateAppButton = () => {
  const { openCreateModal } = useCRUDModalForm(EntityType.App)

  return (
    <Button
      type="primary"
      onClick={() => {
        console.log('open')
        // openCreateAppModal()
        openCreateModal()
      }}
      icon={<PlusOutlined />}
    >
      Create App
    </Button>
  )
}
