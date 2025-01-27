#!/usr/bin/env bash

set -x

ln -s ../codelab/shared/vars-vpc.tf ./vars-vpc.symlink.tf
ln -s ../auth0/vars-domain.tf ./vars-auth0-domain.symlink.tf
ln -s ../neo4j/vars-credentials.tf ./vars-neo4j-credentials.symlink.tf
ln -s ../neo4j/vars-uri.tf ./vars-neo4j-uri.symlink.tf
ln -s ../docker/vars-tag-version.tf ./vars-docker-tag-version.symlink.tf
ln -s ./shared/vars-api-port.tf ./vars-api-port.symlink.tf
ln -s ../loki/shared/vars-loki-url.tf ./vars-loki-url.symlink.tf
ln -s ../digitalocean/vars-region.tf ./vars-region.symlink.tf
ln -s ../digitalocean/vars-api-token.tf ./vars-api-token.symlink.tf
ln -s ../digitalocean/vars-droplet-name.tf ./vars-droplet-name.symlink.tf
ln -s ../digitalocean/vars-access-token.tf ./vars-do-access-token.symlink.tf
