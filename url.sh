#!/bin/bash

URL=$1
regex="(https?)://[-A-Za-z0-9\+&@#/%?=~_|!:,.;]*[-A-Za-z0-9\+&@#/%=~_|]"
if [[ $URL =~ $regex ]]
then 
    content=$(curl -sS $1)
    echo $content | jq .
else
    echo "Link not valid"
fi


# chocolatey install via powershell
# jq diinstall menggunakan choco package manager for windows https://chocolatey.org/