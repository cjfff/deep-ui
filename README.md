# deep-ui

[![Build Status](https://travis-ci.com/cjfff/deep-ui.svg?branch=master)](https://travis-ci.com/cjfff/deep-ui)
[![NPM License](https://badgen.net/npm/license/@femessage/el-data-table)](https://github.com/cjfff/deep-ui/raw/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/cjfff/deep-ui/pulls)


## 介绍

每家公司/每个团队，在持续协作维护项目的过程中，总会产出一些较为通用性的组件，或者 UI 会设计一些样式组件。

但是如果放在项目里的话，大家其实都不会去翻文件看，那这时候有个文档记录一下这些通用组件的话，会让大家协作的意愿更强烈。:fire:

更重要的是，可以提高代码的复用性, 打包编译发布到 `npm` 上，告别多项目的复制粘贴。 :beers:

使用及其简单的方式 (vue-cli3 以及 vuepress) 维护 团队/个人的 组件库。:tada::tada::tada:

## Features

- [x] 代码打包 📦 npm lib 即可
- [x] 代码即文档，代码里面加注释即可解决文档问题
- [x] `yarn new` 交互式创建新组件文件，不用再繁琐的写 `template`
- [x] 按需加载 css [栗子仓库](https://github.com/cjfff/deep-ui-demo)
- [ ] 添加 eslint
- [ ] standard-version
- [ ] 自动生成 release logs

## Project setup

由于 `vuepress` 依赖的是 `core-js` 是 2.x 版本，而 `vue-cli3` 中依赖的是 3.x 版本.

所以 `vuepress` 需要进行全局安装。

```js

npm i -g vuepress core-js@2.6.11

```

```
git clone 

yarn install

yarn docs:dev // 启动开发模式

yarn new // 创建新组件
```

## 发布

现在还没有自动化...

```shell
yarn pub

# 更新 package.json 然后

npm publish
"pub": "yarn build:lib && yarn build:theme",
```

### 参考链接
- https://github.com/vue-styleguidist/vuepress-plugin-live
- https://github.com/BuptStEve/markdown-it-vuese
- https://github.com/shuidi-fed/vuese
- https://markdown-it.github.io/markdown-it/
- https://github.com/koca/vue-prism-editor
- https://juejin.im/post/5dd234635188254a1f44646a#heading-27
- https://segmentfault.com/a/1190000015261753



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.ccc1996.cn"><img src="https://avatars1.githubusercontent.com/u/20502762?v=4" width="100px;" alt=""/><br /><sub><b>cjfff</b></sub></a><br /><a href="https://github.com/cjfff/deep-ui/commits?author=cjfff" title="Documentation">📖</a> <a href="https://github.com/cjfff/deep-ui/issues?q=author%3Acjfff" title="Bug reports">🐛</a> <a href="#example-cjfff" title="Examples">💡</a> <a href="#ideas-cjfff" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-cjfff" title="Maintenance">🚧</a> <a href="https://github.com/cjfff/deep-ui/commits?author=cjfff" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JE-lee"><img src="https://avatars0.githubusercontent.com/u/19794813?v=4" width="100px;" alt=""/><br /><sub><b>lee</b></sub></a><br /><a href="https://github.com/cjfff/deep-ui/commits?author=JE-lee" title="Code">💻</a> <a href="https://github.com/cjfff/deep-ui/commits?author=JE-lee" title="Documentation">📖</a> <a href="#example-JE-lee" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
