module "auth0" {
  source = "../../modules/auth0"

  next_public_web_host    = var.NEXT_PUBLIC_WEB_HOST
  auth0_domain            = var.AUTH0_DOMAIN
  auth0_m2m_client_id     = var.AUTH0_M2M_CLIENT_ID
  auth0_m2m_client_secret = var.AUTH0_M2M_CLIENT_SECRET
  auth0_cypress_username  = var.AUTH0_CYPRESS_USERNAME
  auth0_cypress_password  = var.AUTH0_CYPRESS_PASSWORD
}
