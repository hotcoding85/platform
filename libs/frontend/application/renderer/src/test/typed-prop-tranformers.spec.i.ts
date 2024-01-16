import type { IRendererModel } from '@codelab/frontend/abstract/application'
import {
  rendererRef,
  RendererType,
} from '@codelab/frontend/abstract/application'
import type {
  IElementModel,
  IPageModel,
  TypedProp,
} from '@codelab/frontend/abstract/domain'
import {
  CUSTOM_TEXT_PROP_KEY,
  elementTreeRef,
} from '@codelab/frontend/abstract/domain'
import { elementFactory } from '@codelab/frontend/domain/element'
import { primitiveTypeFactory } from '@codelab/frontend/domain/type'
import { PrimitiveTypeKind } from '@codelab/shared/abstract/codegen'
import { IAtomType } from '@codelab/shared/abstract/core'
import { render } from '@testing-library/react'
import { rendererFactory } from './renderer.test.factory'
import { setupPage } from './setup'
import { rootApplicationStore, rootDomainStore } from './setup/root.test.store'
import { TestProviderWrapper } from './TestProviderWrapper'

describe('TypedPropTransformers', () => {
  const testPropValue = 'some text'
  const testOverridePropValue = 'overridden text'
  const componentId = 'component-id'
  let page: IPageModel
  let pageRootElement: IElementModel
  let renderer: IRendererModel

  beforeEach(() => {
    rootDomainStore.clear()
    ;({ page, rootElement: pageRootElement } = setupPage())

    renderer = rendererFactory(
      rootDomainStore,
      rootApplicationStore,
    )({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      containerNode: elementTreeRef(
        rootDomainStore.appDomainService.apps.get(page.app.id)!.page(page.id)!,
      ).current,
      // Passing Preview renderer to replace customText prop value
      rendererType: RendererType.Preview,
    })

    rootApplicationStore.rendererService.setActiveRenderer(
      rendererRef(renderer.id),
    )
  })

  it.only('should apply default typed prop transformer', () => {
    const integerType = primitiveTypeFactory(rootDomainStore)({
      name: PrimitiveTypeKind.Integer,
      primitiveKind: PrimitiveTypeKind.Integer,
    })

    const element = elementFactory(rootDomainStore)({
      page,
      parentElement: pageRootElement,
      props: dtoFactory.build('props', {
        data: JSON.stringify({
          prop01: 'something',
          prop02: false,
          prop03: {
            kind: integerType.kind,
            type: integerType.id,
            value: 123,
          },
        }),
      }).toJson,
      renderType: dtoFactory.build('atom', {
        api: dtoFactory.build('interfaceType'),
      }),
    })

    const elementModel = rootStore.elementService.element(element.id)

    const { props } =
      rootStore.rendererService.activeRenderer?.current.renderIntermediateElement(
        elementModel,
      ) as IRenderOutput

    expect(props).toMatchObject({
      prop01: 'something',
      prop02: false,
      prop03: 123,
    })
  })

  it('should render props when kind is ReactNodeType', async () => {
    const componentRootElement = dtoFactory.build('element', {
      closestContainerNode: {
        id: componentId,
      },
      parentComponent: { id: componentId },
      props: dtoFactory.build('props', {
        data: JSON.stringify({
          [CUSTOM_TEXT_PROP_KEY]: testPropValue,
        }),
      }).toJson,
      renderType: dtoFactory.build('atom', {
        api: dtoFactory.build('interfaceType'),
        type: IAtomType.AntDesignTypographyText,
      }),
    })

    const component = dtoFactory.build('component', {
      api: dtoFactory.build('interfaceType'),
      childrenContainerElement: componentRootElement,
      id: componentId,
      props: dtoFactory.build('props').toJson,
      rootElement: componentRootElement,
      store: dtoFactory.build('store', {
        api: dtoFactory.build('interfaceType'),
      }),
    })

    const reactNodeType = dtoFactory.build('reactNodeType')

    const element = dtoFactory.build('element', {
      page,
      parentElement: pageRootElement,
      props: dtoFactory.build('props', {
        data: JSON.stringify({
          someNode: {
            kind: reactNodeType.kind,
            type: reactNodeType.id,
            value: component.id,
          } as TypedProp,
        }),
      }).toJson,
      renderType: dtoFactory.build('atom', {
        api: dtoFactory.build('interfaceType'),
      }),
    })

    const { props } =
      rootStore.rendererService.activeRenderer?.current.renderIntermediateElement(
        rootStore.elementService.element(element.id),
      ) as IRenderOutput

    const { findByText } = render(props?.['someNode'], {
      wrapper: TestProviderWrapper(rootStore),
    })

    const node = await findByText(testPropValue)

    expect(node).toBeInTheDocument()
  })

  it.each([
    // argument to pass to rendered prop
    [undefined],
    [testOverridePropValue],
  ])(
    'should transform render prop when kind is RenderPropType and render with passed argument - %s',
    async (renderedPropArgument) => {
      const componentRootElement = dtoFactory.build('element', {
        closestContainerNode: {
          id: componentId,
        },
        parentComponent: { id: componentId },
        props: dtoFactory.build('props', {
          data: JSON.stringify({
            [CUSTOM_TEXT_PROP_KEY]: `{{componentProps.${CUSTOM_TEXT_PROP_KEY}}}`,
          }),
        }).toJson,
        renderType: dtoFactory.build('atom', {
          api: dtoFactory.build('interfaceType'),
          type: IAtomType.AntDesignTypographyText,
        }),
      })

      const component = dtoFactory.build('component', {
        api: dtoFactory.build('interfaceType'),
        childrenContainerElement: componentRootElement,
        id: componentId,
        props: dtoFactory.build('props', {
          data: JSON.stringify({
            [CUSTOM_TEXT_PROP_KEY]: testPropValue,
          }),
        }).toJson,
        rootElement: componentRootElement,
        store: dtoFactory.build('store', {
          api: dtoFactory.build('interfaceType'),
        }),
      })

      const componentApi = await rootStore.typeService.getOne(component.api.id)

      componentApi?.writeCache({
        fields: [
          dtoFactory.build('field', {
            api: componentApi,
            fieldType: dtoFactory.build('primitiveType', {
              name: PrimitiveTypeKind.String,
              primitiveKind: PrimitiveTypeKind.String,
            }),
            key: CUSTOM_TEXT_PROP_KEY,
          }),
        ],
      })

      const renderPropType = dtoFactory.build('renderPropType')

      const element = dtoFactory.build('element', {
        page,
        parentElement: pageRootElement,
        props: dtoFactory.build('props', {
          data: JSON.stringify({
            someNode: {
              kind: renderPropType.kind,
              type: renderPropType.id,
              value: component.id,
            } as TypedProp,
          }),
        }).toJson,
        renderType: dtoFactory.build('atom', {
          api: dtoFactory.build('interfaceType'),
        }),
      })

      const { props } =
        rootStore.rendererService.activeRenderer?.current.renderIntermediateElement(
          rootStore.elementService.element(element.id),
        ) as IRenderOutput

      const { findByText } = render(props?.['someNode'](renderedPropArgument), {
        wrapper: TestProviderWrapper(rootStore),
      })

      expect(
        await findByText(renderedPropArgument ?? testPropValue),
      ).toBeInTheDocument()
    },
  )
})