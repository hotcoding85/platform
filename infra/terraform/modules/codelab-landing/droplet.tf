resource "digitalocean_droplet" "codelab_landing" {
  image  = "docker-20-04"
  name   = "landing"
  region = var.digitalocean_region
  size   = "s-1vcpu-1gb-intel"

  backups    = true
  monitoring = true
  ipv6       = true

  # Need to be in same VPC since
  vpc_uuid = var.codelab_app_vpc_id

  # Taken from DO security SSH keys
  ssh_keys = ["31:0e:90:12:06:a2:9f:8b:07:0e:a8:49:cc:d8:1f:71"]

  user_data = data.cloudinit_config.landing.rendered

  droplet_agent = true
}
