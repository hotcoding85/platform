import CloseOutlined from '@ant-design/icons/CloseOutlined'
import SaveOutlined from '@ant-design/icons/SaveOutlined'
import type { SubmitController } from '@codelab/frontend/abstract/types'
import { FormNames } from '@codelab/frontend/abstract/types'
import { useStore } from '@codelab/frontend/application/shared/store'
import {
  CuiSidebarPopover,
  useCui,
} from '@codelab/frontend/presentation/codelab-ui'
import type { Maybe } from '@codelab/shared/abstract/types'
import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import { UpdateActionForm } from './UpdateActionForm'

export const UpdateActionPopover = observer(() => {
  const submitRef = useRef<Maybe<SubmitController>>()
  const { actionService } = useStore()
  const { popover } = useCui()

  return (
    <CuiSidebarPopover
      id={FormNames.UpdateAction}
      label="Update Action"
      toolbar={{
        items: [
          {
            icon: <SaveOutlined />,
            key: 'Update',
            label: 'Update',
            onClick: () => {
              submitRef.current?.submit()
            },
            title: 'Update',
          },
          {
            icon: <CloseOutlined />,
            key: 'Cancel',
            label: 'Cancel',
            onClick: () => {
              popover.close()
              actionService.updateForm.close()
            },
            title: 'Cancel',
          },
        ],
        title: 'Update Action toolbar',
      }}
    >
      <UpdateActionForm
        onSubmitSuccess={() => popover.close()}
        showFormControl={false}
        submitRef={submitRef}
      />
    </CuiSidebarPopover>
  )
})
