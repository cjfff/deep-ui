exports.notEmpty = name => {
  return v => {
    if (!v || v.trim === "") {
      return `${name} 必须填写`;
    }
    return true;
  };
};

// 下划线转换驼峰
function camelCase(name) {
  return name
    .replace(/[\_|-](\w)/g, function(all, letter) {
      return letter.toUpperCase();
    })
    .replace(/./, _ => _.toUpperCase());
}
// 驼峰转换中划线
function kebabCase(name) {
  return name.replace(/([A-Z])/g, "-$1").toLowerCase();
}

exports.camelCase = camelCase;
exports.kebabCase = kebabCase;
