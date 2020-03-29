#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
#set -e

npm i -g vuepress core-js@2.6.11 --registry=https://registry.npm.taobao.org

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd workdir

git init
git add -A
git commit -m 'deploy'

git remote add origin https://${GITHUB_TOKEN}@github.com/deepexi-com/deepexi-com.git

git push -f --set-upstream origin master

cd -