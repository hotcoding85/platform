resource "digitalocean_record" "web_a_record" {
  domain = var.codelab_app_domain_id
  type   = "A"
  name   = "dev"
  value  = digitalocean_loadbalancer.web.ip
  ttl    = 3600
}

resource "digitalocean_record" "web_cname" {
  domain = var.codelab_app_domain_id
  type   = "CNAME"
  name   = "www.dev"
  value  = "dev.codelab.app."
  ttl    = 3600
}
