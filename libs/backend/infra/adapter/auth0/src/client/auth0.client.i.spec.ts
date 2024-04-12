import { getEnv } from '@codelab/shared/config'
import { Auth0Client } from './auth0.client'

describe('Auth0 client', () => {
  /**
   * Don't run this during specs, use for developing and testing the API only
   */
  it('can login programmatically', async () => {
    const env = getEnv()

    const auth0Client = new Auth0Client({
      auth0Audience: env.auth0.audience,
      auth0Domain: env.auth0.domain,
      // baseUrl: env.auth0.baseUrl,
      clientId: env.auth0.clientId,
      clientSecret: env.auth0.clientSecret,
    })

    const response = await auth0Client.loginWithPassword(
      env.auth0.cypressUsername,
      env.auth0.cypressPassword,
    )

    // console.debug(response.data.access_token)
  })
})
