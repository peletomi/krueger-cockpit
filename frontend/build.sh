#!/bin/bash

out_dir=$1
if [[ -z $out_dir ]]; then
    echo "Specify out directory!"
    echo "Usage: ./build.js /foo/bar/quux"
    exit -1
fi

git_rev=$(git rev-parse --short=8 HEAD)
app_file="app.${git_rev}.js"
build_dir=$(mktemp -d)
build_file="${build_dir}/build.js"

jspm bundle --minify js/main.js $build_file
cp "${build_file}" "${out_dir}/${app_file}"
cp "${build_file}.map" "${out_dir}/${app_file}.map"

sed "s#<!-- app.js -->#<script src=\"${app_file}\"></script>#" index.html > "${out_dir}/index.html"

cp ./config.js "${out_dir}/config.js"
mkdir "${out_dir}/jspm_packages"
cp jspm_packages/system.js  "${out_dir}/jspm_packages/system.js"
cp -R css/ "${out_dir}/css"
cp -R fonts/ "${out_dir}/fonts"
