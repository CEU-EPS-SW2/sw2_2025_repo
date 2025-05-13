#!/bin/bash

HOST=localhost
PORT=27017

for coll in *; do
    if [ -d "${coll}" ] ; then
        echo "$coll"
        for file in $coll/*; do
            mongoimport --drop --host $HOST --port $PORT --db "$coll" --collection "$(basename $file .json)" --file $file
        done
    fi
done
