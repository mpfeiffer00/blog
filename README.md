# blog

## Setup
Install Vagrant: https://www.vagrantup.com/downloads.html
https://www.vagrantup.com/intro/getting-started/project_setup.html

Run "vagrant_create.sh"

If shell does not load properly when ssh'ing, use 'VAGRANT_PREFER_SYSTEM_BIN=1 vagrant ssh'
load 'export VAGRANT_PREFER_SYSTEM_BIN=1' into .bashrc

# https://gorails.com/setup/ubuntu/14.10
Post install:
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"