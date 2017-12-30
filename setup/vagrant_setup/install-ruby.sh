#!/usr/bin/env bash

# Steps from https://rvm.io/integration/vagrant#using-rvm-with-vagrant
source $HOME/.rvm/scripts/rvm || source /etc/profile.d/rvm.sh

rvm use --default --install $1

shift

if (( $# ))
then gem install $@
fi

rvm cleanup all
