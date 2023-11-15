import ImportOutlined from '@ant-design/icons/ImportOutlined'
import type { IAppModel } from '@codelab/frontend/abstract/domain'
import { useStore } from '@codelab/frontend/application/shared/store'
import {
  useErrorNotify,
  useSuccessNotify,
} from '@codelab/frontend/shared/utils'
import type { HttpException } from '@nestjs/common'
import { useAsync } from '@react-hookz/web'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'

export const ImportAppDialog = observer(() => {
  const { adminService } = useStore()
  const [{ status }, importApp] = useAsync(adminService.importApp)

  const onError = useErrorNotify({
    description: (event: HttpException) => {
      return event.message
    },
    title: 'Failed to import app',
  })

  const onSuccess = useSuccessNotify({
    description: (event: Array<IAppModel>) => {
      return `${event.length} of apps imported`
    },
    title: 'App imported successfully',
  })

  const inputFile = useRef<HTMLInputElement | null>(null)
  const onClick = () => inputFile.current?.click()

  const onFileChange = async () => {
    const files = inputFile.current?.files
    const appData = await files?.[0]?.text()

    if (appData) {
      await importApp.execute(appData).then(onSuccess).catch(onError)
    }
  }

  return (
    <>
      {status === 'loading' && <Spin className="mr-2" />}
      <ImportOutlined onClick={onClick} />
      <input
        accept=".json"
        onChange={onFileChange}
        ref={inputFile}
        style={{ display: 'none' }}
        type="file"
      />
    </>
  )
})
