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

# gcloud init
https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu
export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"

# google storage for ckeditor5
https://github.com/hutchgrant/ckeditor5-google-do

# building
bundle exec rails webpacker:install
yarn add webpack webpack-dev-server --dev
bundle exec rails webpacker:precompile
bundle exec rails webpacker:compile

# Starting rails
rails s -b 0.0.0.0
