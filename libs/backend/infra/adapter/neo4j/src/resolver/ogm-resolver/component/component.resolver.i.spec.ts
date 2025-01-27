import { AtomType } from '@codelab/backend/abstract/codegen'
import {
  connectNodeId,
  connectOwner,
  ElementProperties,
} from '@codelab/shared/domain'
import type { INestApplication } from '@nestjs/common'
import { print } from 'graphql'
import request from 'supertest'
import { v4 } from 'uuid'
import { OgmService } from '../../../infra'
import { setupTestingContext } from '../../../test/setup'
import { ComponentResolverComponents } from './component.spec.graphql.gen'

describe('PageResolvers', () => {
  let app: INestApplication
  let ogmService: OgmService
  const context = setupTestingContext()

  beforeAll(async () => {
    const ctx = await context
    const module = ctx.module

    app = ctx.nestApp
    ogmService = module.get(OgmService)

    await ctx.beforeAll()
  })

  afterAll(async () => {
    const ctx = await context

    await ctx.afterAll()
  })

  it('should fetch a component with elements resolver', async () => {
    const owner = (
      await ogmService.User.create({
        input: [
          {
            auth0Id: 'something',
            email: 'something@some.thing',
            id: v4(),
            username: 'someusername',
          },
        ],
      })
    ).users[0]!

    const componentRef = { id: v4() }

    const atomApi = (
      await ogmService.InterfaceType.create({
        input: [
          {
            id: v4(),
            name: 'React Fragment Api',
            owner: connectOwner(owner),
          },
        ],
      })
    ).interfaceTypes[0]!

    const atomReactFragment = (
      await ogmService.Atom.create({
        input: [
          {
            api: connectNodeId(atomApi.id),
            id: v4(),
            name: 'React Fragment',
            owner: connectOwner(owner),
            type: AtomType.ReactFragment,
          },
        ],
      })
    ).atoms[0]!

    const props = (
      await ogmService.Prop.create({
        input: [
          {
            data: '{}',
            id: v4(),
          },
        ],
      })
    ).props[0]!

    const rootElement = (
      await ogmService.Element.create({
        input: [
          {
            compositeKey: ElementProperties.elementCompositeKey(
              'Component Root',
              componentRef,
            ),
            id: v4(),
            props: connectNodeId(props.id),
            renderType: {
              Atom: connectNodeId(atomReactFragment.id),
            },
          },
        ],
      })
    ).elements[0]!

    const childElementProps = (
      await ogmService.Prop.create({
        input: [
          {
            data: '{}',
            id: v4(),
          },
        ],
      })
    ).props[0]!

    const childElement = (
      await ogmService.Element.create({
        input: [
          {
            compositeKey: ElementProperties.elementCompositeKey(
              'Child Element',
              componentRef,
            ),
            id: v4(),
            parentElement: connectNodeId(rootElement.id),
            props: connectNodeId(childElementProps.id),
            renderType: {
              Atom: connectNodeId(atomReactFragment.id),
            },
          },
        ],
      })
    ).elements[0]!

    const storeApi = (
      await ogmService.InterfaceType.create({
        input: [
          {
            id: v4(),
            name: 'Store Api',
            owner: connectOwner(owner),
          },
        ],
      })
    ).interfaceTypes[0]!

    const store = (
      await ogmService.Store.create({
        input: [
          {
            api: connectNodeId(storeApi.id),
            id: v4(),
            name: 'some store',
          },
        ],
      })
    ).stores[0]!

    const componentApi = (
      await ogmService.InterfaceType.create({
        input: [
          {
            id: v4(),
            name: 'Component Api',
            owner: connectOwner(owner),
          },
        ],
      })
    ).interfaceTypes[0]!

    const componentProps = (
      await ogmService.Prop.create({
        input: [
          {
            data: '{}',
            id: v4(),
          },
        ],
      })
    ).props[0]!

    const component = (
      await ogmService.Component.create({
        input: [
          {
            api: connectNodeId(componentApi.id),
            id: v4(),
            name: 'Component',
            owner: connectOwner(owner),
            props: connectNodeId(componentProps.id),
            rootElement: connectNodeId(rootElement.id),
            store: connectNodeId(store.id),
          },
        ],
      })
    ).components[0]!

    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: print(ComponentResolverComponents),
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.components).toEqual([
          {
            elements: [
              {
                id: rootElement.id,
              },
              {
                id: childElement.id,
              },
            ],
            id: component.id,
            name: component.name,
            rootElement: {
              id: rootElement.id,
            },
          },
        ])
      })
  })
})
