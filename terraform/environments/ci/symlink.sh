#!/usr/bin/env bash

set -x

rm ./*.symlink.tf

ln -s ../shared/module-auth0.tf ./module-auth0.symlink.tf
ln -s ../shared/vars-auth0.tf ./vars-auth0.symlink.tf
ln -s ../shared/vars-auth0-secret.tf ./vars-auth0-secret.symlink.tf
ln -s ../shared/vars-codelab-api.tf ./vars-codelab-api.symlink.tf
ln -s ../shared/vars-codelab-web.tf ./vars-codelab-web.symlink.tf
ln -s ../shared/vars-supabase.tf ./vars-supabase.symlink.tf
ln -s ../shared/vars-docker.tf ./vars-docker.symlink.tf
ln -s ../shared/vars-do-access-token.tf ./vars-do-access-token.symlink.tf
ln -s ../shared/vars-circleci-token.tf ./vars-circleci-token.symlink.tf

