#!/bin/bash

urltxt=$1
while read -r p; do
    data=$(curl -s $p)
    name=${p##*/}
    touch "${name}.json"
    echo $data > "${name}.json"
    echo "${name}.json created"
done < $urltxt

#udh bisa, tapi ngetestnya di repl.it



