const componentGenerator = require("./plop-templates/component/prompt");
const { writeIndexAction } = require("./plop-templates/utils");

module.exports = plop => {
  // 增加一种 action
  plop.setActionType("writeIndexAction", writeIndexAction);

  plop.setGenerator("component", componentGenerator);
};
