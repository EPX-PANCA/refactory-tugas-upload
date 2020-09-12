#!/bin/bash

v=$1
curl -sL https://deb.nodesource.com/setup_$v.x | sudo -E bash -
sudo apt-get install -y nodejs
echo "node version $v has install"

#https://qastack.id/ubuntu/594656/how-to-install-the-latest-versions-of-nodejs-and-npm