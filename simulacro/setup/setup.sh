#!/bin/bash
sudo rpm --import https://pgp.mongodb.com/server-7.0.asc
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/7.0/x86_64/" mongodb
sudo zypper -n install mongodb-org
sudo systemctl start mongod
