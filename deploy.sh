#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 安装 vuepress 和 core-js 依赖
npm i -g vuepress core-js@2.6.11 --registry=https://registry.npm.taobao.org

# 生成静态文件
npm run docs:build


mkdir temp_web
cd temp_web


git clone --depth 1 -b gh-pages --single-branch https://${GITHUB_TOKEN}@github.com/cjfff/deep-ui.git && cd deep-ui

rm -rf ./deep-ui/*

cp -rf ../../dist/* .

git add -A .
git commit -m "deploy"
git push origin gh-pages

cd ../../
rm -rf temp_web

cd -
