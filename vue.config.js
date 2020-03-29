const path = require("path");

module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: "src/index.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/var.less")]
    }
  },
  configureWebpack: {
    externals: {
      "element-ui": "Element",
      vue: {
        root: "Vue",
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue"
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.devtool = "source-map";
    }
  }
};
