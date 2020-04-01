const path = require('path');
const glob = require('glob');

const getPath = (path) => path.replace(/.*component\//, '')

const getDocs = (dir = 'basic') => {

  const docs = glob
    .sync(path.resolve(__dirname, `../component/${dir}/*.md`))
    .map(p => getPath(p))

  return docs
}

module.exports = {
  title: 'DeepUi',
  base: `/deep-ui/`,
  dest: 'dist',
  description: 'deepexi.com 中台研发团队的组件库',
  port: 8083,
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vue-prism-editor@0.5.1/dist/VuePrismEditor.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@femessage/element-ui@2.16.0/lib/theme-chalk/index.css' }],
  ],
  plugins: [
    [
      'live',
      {
        // to use a custom layout for your vue components
        layout: path.resolve(__dirname, './layout.vue'),
        editorProps: {
          lineNumbers: true,
        }
      }
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@component': path.resolve(__dirname, '../../src'),
        '@': path.resolve(__dirname, '../../src'),
        '~': path.resolve(__dirname, '../../src')
      }
    },
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: 'GitHub', link: 'https://github.com/cjfff/deep-ui' },
    ],
    sidebar: {
      '/component/': [
        {
          title: '开发指南',
          collapsable: false,
          children: getDocs('guide')
        },
        {
          title: '基础组件',
          collapsable: false,
          children: getDocs('basic')
        },
        {
          title: '高阶组件',
          collapsable: false,
          children: getDocs('hoc')
        },
        {
          title: '布局组件',
          collapsable: false,
          children: getDocs('layout')
        },
      ]
    }
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-vuese'), {
        root: `${process.cwd()}/src/components/`,
        useRender: (vueseRender) => {
          const renderRes = vueseRender.render()
          // 格式转换可以去这里查看详情 https://vuese.org/zh/markdown-render/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-render
          return Object.entries(renderRes).reduce((acc, [title, value]) => acc.concat(`## ${title}\r ${value}`)
            , []).join('\r')
        },
      })
    }
  }
}