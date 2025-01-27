import type { CodelabPage } from '@codelab/frontend/abstract/types'
import { PageType } from '@codelab/frontend/abstract/types'
import type { DashboardTemplateProps } from '@codelab/frontend/presentation/view'
import { DynamicDashboardTemplate } from '@codelab/frontend/presentation/view'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { TypesPrimarySidebar } from '../use-cases'
import { TypesViewHeader } from './TypesViewHeader'

export type TypesView = CodelabPage<DashboardTemplateProps>

export const TypesViewLayout: TypesView['Layout'] = observer(({ children }) => {
  return (
    <DynamicDashboardTemplate
      Header={TypesViewHeader}
      PrimarySidebar={{
        default: PageType.Type,
        items: [
          {
            key: PageType.Type,
            render: TypesPrimarySidebar,
          },
        ],
      }}
    >
      {children}
    </DynamicDashboardTemplate>
  )
})
