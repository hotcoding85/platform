import {
  domainRequest,
  Role,
  setupTestModule,
  teardownTestModule,
} from '@codelab/backend'
import {
  CreateTypeGql,
  CreateTypeInput,
  CreateTypeMutation,
  GetTypeGql,
  GetTypeInput,
  GetTypeQuery,
} from '@codelab/codegen/graphql'
import { INestApplication } from '@nestjs/common'
import { TypeModule } from '../../../../type.module'
import { createPrimitiveTypeStringInput } from './data'

describe('CreateType', () => {
  let guestApp: INestApplication
  let userApp: INestApplication

  beforeAll(async () => {
    guestApp = await setupTestModule([TypeModule], {
      role: Role.GUEST,
    })
    userApp = await setupTestModule([TypeModule], {
      role: Role.USER,
    })
  })

  afterAll(async () => {
    await teardownTestModule(guestApp)
    await teardownTestModule(userApp)
  })

  describe('Guest', () => {
    it('should not create type', async () => {
      await domainRequest<CreateTypeInput>(
        guestApp,
        CreateTypeGql,
        createPrimitiveTypeStringInput,
        { message: 'Unauthorized' },
      )
    })
  })

  describe('User', () => {
    // TODO add for other types

    it('should create primitive type', async () => {
      const {
        createType: { id: typeId },
      } = await domainRequest<CreateTypeInput, CreateTypeMutation>(
        userApp,
        CreateTypeGql,
        createPrimitiveTypeStringInput,
      )

      const { getType: type } = await domainRequest<GetTypeInput, GetTypeQuery>(
        userApp,
        GetTypeGql,
        { typeId },
      )

      expect(type).toMatchObject({
        __typename: 'PrimitiveType',
        name: createPrimitiveTypeStringInput.name,
        primitiveKind:
          createPrimitiveTypeStringInput.primitiveType?.primitiveKind,
      })
    })
  })
})
