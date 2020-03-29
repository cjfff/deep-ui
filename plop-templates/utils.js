const fs = require("fs");
const path = require("path");

exports.notEmpty = name => {
  return v => {
    if (!v || v.trim === "") {
      return `${name} 必须填写`;
    }
    return true;
  };
};

// 下划线转换驼峰
exports.camelCase = function camelCase(name) {
  return name
    .replace(/[\_|-](\w)/g, function(all, letter) {
      return letter.toUpperCase();
    })
    .replace(/./, _ => _.toUpperCase());
};
// 驼峰转换中划线
exports.kebabCase = function kebabCase(name) {
  return name.replace(/([A-Z])/g, "-$1").toLowerCase();
};

/**
 *写入 Route
 */
exports.setRouteAction = answers => {
  const navPath = path.resolve(__dirname, "./../src/const/route-info.json");

  // 读取 JSON
  let routerInfoJson = {};

  if (fs.existsSync(navPath)) {
    // 防止读出来的不是 JSON
    try {
      routerInfoJson = JSON.parse(fs.readFileSync(navPath, "utf-8"));
    } catch (error) {
      console.log(error);
    }
  }

  const { name, routeName, appType } = answers;

  const appMap = {
    enable: "1",
    none: "2",
    disabled: "3"
  };

  const routePath = name.startsWith("/") ? name : `/${name}`;

  // 路由匹配的是 : 不是 下划线
  routerInfoJson[routePath.replace(/_/g, ":")] = {
    title: routeName,
    appType: appMap[appType],
    enable: false
  };

  fs.writeFileSync(
    navPath,
    JSON.stringify(routerInfoJson, null, "   "),
    "utf-8"
  );

  return "\nnav.config.json update success\n";
};

exports.writeIndexAction = function(name) {
  const indexPath = path.resolve(__dirname, "../src/index.js");
  const content = fs.readFileSync(indexPath, "utf-8");

  console.log(content);
};
