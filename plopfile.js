const componentGenerator = require("./plop-templates/component/prompt");
const writeJsonAndBuildEntry = require("./plop-templates/writeJsonAndBuildEntry");

module.exports = plop => {
  // 增加一种 action
  plop.setActionType("writeJsonAndBuildEntry", writeJsonAndBuildEntry);

  plop.setGenerator("component", componentGenerator);
};
