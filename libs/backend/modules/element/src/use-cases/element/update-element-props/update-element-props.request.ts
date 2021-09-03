import { WithCurrentUserRequest } from '@codelab/backend/abstract/core'
import type { User } from '@codelab/shared/abstract/core'
import { UpdateElementPropsInput } from './update-element-props.input'

export class UpdateElementPropsRequest implements WithCurrentUserRequest {
  declare input: UpdateElementPropsInput

  declare currentUser: User
}