#!/bin/bash

set -x

# Copied from DO dashboard `Volumes` > `More` > `Config instructions`
mkdir -p /mnt/codelab_neo4j_volumes

mount -o discard,defaults /dev/disk/by-id/scsi-0DO_Volume_codelab-neo4j-volumes /mnt/codelab_neo4j_volumes

echo /dev/disk/by-id/scsi-0DO_Volume_neo4j-volumes /mnt/codelab_neo4j_volumes ext4 defaults,nofail,discard 0 0 | sudo tee -a /etc/fstab


# Copied from DO dashboard `Volumes` > `More` > `Config instructions`
mkdir -p /mnt/codelab_neo4j_prometheus_volumes

mount -o discard,defaults /dev/disk/by-id/scsi-0DO_Volume_codelab-neo4j-prometheus-volumes /mnt/codelab_neo4j_prometheus_volumes

echo /dev/disk/by-id/scsi-0DO_Volume_codelab-neo4j-prometheus-volumes /mnt/codelab_neo4j_prometheus_volumes ext4 defaults,nofail,discard 0 0 | sudo tee -a /etc/fstab

#
mkdir -p /mnt/codelab_neo4j_alloy_volumes

mount -o discard,defaults /dev/disk/by-id/scsi-0DO_Volume_codelab-neo4j-alloy-volumes /mnt/codelab_neo4j_alloy_volumes

echo /dev/disk/by-id/scsi-0DO_Volume_codelab-neo4j-alloy-volumes /mnt/neo4j_alloy_volumes ext4 defaults,nofail,discard 0 0 | sudo tee -a /etc/fstab
