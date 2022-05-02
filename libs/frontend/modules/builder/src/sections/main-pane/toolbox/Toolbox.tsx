import { DragOutlined } from '@ant-design/icons'
import {
  ATOM_SERVICE,
  COMPONENT_SERVICE,
  WithServices,
} from '@codelab/frontend/abstract/core'
import { useLoadingState } from '@codelab/frontend/shared/utils'
import { Spinner } from '@codelab/frontend/view/components'
import {
  IAtom,
  IComponent,
  ICreateElementDTO,
} from '@codelab/shared/abstract/core'
import { useDroppable } from '@dnd-kit/core'
import { css } from '@emotion/react'
import { Button } from 'antd'
import Fuse from 'fuse.js'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef, useState } from 'react'
import tw from 'twin.macro'
import { BuilderDropId } from '../../../dnd/BuilderDropId'
import { useCreateElementDraggable } from '../../../dnd/useCreateElementDraggable'

export interface ToolboxItem {
  id: string
  name: string
  createElementInputFactory: () => Omit<
    ICreateElementDTO,
    'parentElementId' | 'order'
  >
}

const atomToolboxItemFactory = (atom: IAtom): ToolboxItem => ({
  name: atom.name,
  id: atom.id,
  createElementInputFactory: () => ({
    name: atom.name,
    atom: {
      atomId: atom.id,
    },
  }),
})

const componentToolboxItemFactory = (component: IComponent): ToolboxItem => {
  const { name, id } = component

  return {
    name,
    id,
    createElementInputFactory: () => ({
      name,
      componentId: id,
    }),
  }
}

export type ToolboxProps = WithServices<ATOM_SERVICE | COMPONENT_SERVICE> & {
  searchQuery?: string
}

export const Toolbox = observer<ToolboxProps>(
  ({ searchQuery, atomService, componentService }) => {
    const { setNodeRef } = useDroppable({ id: BuilderDropId.Toolbox })
    const [filteredItems, setFilteredItems] = useState<Array<ToolboxItem>>([])
    const fuseRef = useRef(new Fuse<ToolboxItem>([], { keys: ['name'] }))

    const [, { isLoading: isLoadingAtoms }] = useLoadingState(
      () => atomService.getAll(),
      { executeOnMount: true },
    )

    const [, { isLoading: isLoadingComponents }] = useLoadingState(
      () => componentService.getAll(),
      { executeOnMount: true },
    )

    useEffect(() => {
      return autorun(() => {
        const componentsList = componentService.components
        const atomsList = atomService.atoms

        const toolboxItems: Array<ToolboxItem> = [
          ...atomsList.map(atomToolboxItemFactory),
          ...componentsList.map(componentToolboxItemFactory),
        ]

        fuseRef.current.setCollection(toolboxItems)

        if (searchQuery) {
          const results = fuseRef.current.search(searchQuery)
          setFilteredItems(results.map((r) => r.item))
        } else {
          setFilteredItems(toolboxItems)
        }
      })
    }, [searchQuery])

    return (
      <div
        css={css`
          max-height: 100%;
          height: 100%;
          overflow-y: hidden;
          display: grid;
          grid-auto-rows: auto;
          gap: 0.25rem;
        `}
        ref={setNodeRef}
      >
        <Spinner isLoading={isLoadingAtoms || isLoadingComponents}>
          {filteredItems.map((item) => (
            <ToolboxItemView key={item.id} toolboxItem={item} />
          ))}
        </Spinner>
      </div>
    )
  },
)

const ToolboxItemView = ({ toolboxItem }: { toolboxItem: ToolboxItem }) => {
  const { attributes, listeners, setNodeRef } = useCreateElementDraggable(
    toolboxItem.id,
    toolboxItem.createElementInputFactory(),
  )

  return (
    <div css={tw`border-gray-300 p-2 border flex items-center justify-between`}>
      <span>{toolboxItem.name}</span>

      <Button
        ref={setNodeRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...listeners}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
        icon={<DragOutlined />}
        size="small"
      />
    </div>
  )
}

Toolbox.displayName = 'MainPaneBuilderToolboxTab'