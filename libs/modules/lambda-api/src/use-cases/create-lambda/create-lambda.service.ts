import {
  DgraphEntityType,
  DgraphLambda,
  DgraphUseCase,
  jsonMutation,
} from '@codelab/backend'
import { Injectable } from '@nestjs/common'
import { Txn } from 'dgraph-js-http'
import { getLambdaQuery } from '../../lib/getLambdaQuery'
import { CreateLambdaRequest } from './create-lambda.request'

@Injectable()
export class CreateLambdaService extends DgraphUseCase<
  CreateLambdaRequest,
  any
> {
  async executeTransaction(
    { ownerId, input: { name, body } }: CreateLambdaRequest,
    txn: Txn,
  ) {
    // Mutation block
    const createMutation = jsonMutation<DgraphLambda>({
      uid: '_:lambda_id',
      'dgraph.type': [DgraphEntityType.Lambda],
      name,
      body,
      ownerId,
    })

    const { id } = await this.dgraph.create(txn, createMutation, 'lambda_id')
    //
    // Query block
    const q = getLambdaQuery().setUidFunc(id)

    return this.dgraph.transactionWrapper((txn2) =>
      this.dgraph.getOneOrThrow(
        txn2,
        q,
        () => new Error('Error while creating lambda'),
      ),
    )
  }
}