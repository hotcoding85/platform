import type {
  UserCreateInput,
  UserDeleteInput,
  UserUpdateInput,
} from '@codelab/shared/abstract/codegen'
import type { IUser, IUserDto } from '@codelab/shared/abstract/core'
import type { IModel } from '../shared'

export interface IUserModel
  extends IUserDto,
    IModel<UserCreateInput, UserUpdateInput, UserDeleteInput, IUser> {
  preferences: Record<string, unknown>
  setId(id: string): void
}
