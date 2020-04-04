const path = require("path");

const buildMode = process.env.BUILD_MODE;

console.log(buildMode);

module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: "src/index.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: {
    externals: {
      "@femessage/element-ui": "Element",
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
