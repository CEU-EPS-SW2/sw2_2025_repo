#!/bin/bash
OneClickInstallUI https://software.opensuse.org/ymp/KDE:KDE3/openSUSE_Tumbleweed/openssl-1_1.ymp
sudo rpm --import https://pgp.mongodb.com/server-8.0.asc
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/8.0/x86_64/" mongodb
sudo zypper -n install mongodb-org
sudo zypper -n remove mongodb-mongosh
sudo zypper -n install mongodb-mongosh-shared-openssl3
sudo systemctl start mongod
