/**
 * This is the port that our domain needs to implement
 */
export interface Lambda {
  id: string
  // ownerId: Auth0UserId
  name: string
  body: string
}