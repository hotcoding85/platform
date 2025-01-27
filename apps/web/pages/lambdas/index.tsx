import {
  type LambdasView,
  LambdasViewLayout,
} from '@codelab/frontend/application/lambda'
import { withPageAuthRedirect } from '@codelab/frontend/application/shared/auth'
import Head from 'next/head'
import React from 'react'

const LambdasView: LambdasView = () => {
  return (
    <>
      <Head>
        <title>Lambdas | Codelab</title>
      </Head>

      {/* <CreateLambdaModal />
      <UpdateLambdaModal />
      <DeleteLambdaModal />
      <ContentSection>
        <GetLambdasTable />
      </ContentSection> */}
    </>
  )
}

export default LambdasView

export const getServerSideProps = withPageAuthRedirect()

LambdasView.Layout = LambdasViewLayout
