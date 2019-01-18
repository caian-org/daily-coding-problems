#!/usr/bin/env bash

set -e

declare -a langs=("clj" "cpp" "go" "js" "py")

cd problems
next=$(( $(echo */ | wc | awk '{print $2}') + 1 ))

mkdir $next && cd $next
touch README.md

for lang in "${langs[@]}"
do
    mkdir $lang && cd $lang
    touch "main.$lang"
    cd ..
done

cd ..
