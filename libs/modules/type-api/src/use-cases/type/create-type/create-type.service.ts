import {
  DgraphArrayType,
  DgraphCreateUseCase,
  DgraphEntityType,
  DgraphEnumType,
  DgraphInterfaceType,
  DgraphPrimitiveType,
  DgraphRepository,
  jsonMutation,
} from '@codelab/backend'
import { Injectable } from '@nestjs/common'
import { Txn } from 'dgraph-js'
import { TypeValidator } from '../../../type.validator'
import { GetTypeService } from '../get-type'
import { CreateTypeInput } from './create-type.input'

@Injectable()
export class CreateTypeService extends DgraphCreateUseCase<CreateTypeInput> {
  constructor(
    dgraph: DgraphRepository,
    private getTypeService: GetTypeService,
    private typeValidator: TypeValidator,
  ) {
    super(dgraph)
  }

  protected async executeTransaction(request: CreateTypeInput, txn: Txn) {
    await this.validate(request)

    return this.dgraph.create(txn, (blankNodeUid) =>
      this.createMutation(request, blankNodeUid),
    )
  }

  private createMutation(request: CreateTypeInput, blankNodeUid: string) {
    const { arrayType, enumType, primitiveType, name } = request

    return jsonMutation<
      DgraphArrayType &
        DgraphEnumType &
        DgraphPrimitiveType &
        DgraphInterfaceType
    >({
      uid: blankNodeUid,
      'dgraph.type': [
        DgraphEntityType.Type,
        this.getDgraphType(request),
      ] as any,
      name,
      itemType: arrayType ? { uid: arrayType.itemTypeId } : undefined,
      primitiveKind: primitiveType ? primitiveType.primitiveKind : undefined,
      allowedValues: enumType
        ? enumType.allowedValues.map((av) => ({
            'dgraph.type': [DgraphEntityType.EnumTypeValue],
            name: av.name,
            stringValue: av.value,
          }))
        : undefined,
    })
  }

  protected async validate(request: CreateTypeInput): Promise<void> {
    await this.typeValidator.validateCreateTypeInput(request)
  }

  private getDgraphType({
    interfaceType,
    primitiveType,
    enumType,
    arrayType,
  }: CreateTypeInput) {
    if (interfaceType) {
      return DgraphEntityType.InterfaceType
    }

    if (primitiveType) {
      return DgraphEntityType.PrimitiveType
    }

    if (enumType) {
      return DgraphEntityType.EnumType
    }

    if (arrayType) {
      return DgraphEntityType.ArrayType
    }

    throw new Error("Bad request, can't parse CreateTypeInput")
  }
}
