#!/bin/bash

echo "----- Adding Vagrant Box -----"
vagrant box add ubuntu/trusty64

echo "----- Creating Ubuntu Box -----"
vagrant up

echo "Initiating SSH....."
vagrant ssh