const { notEmpty, kebabCase, camelCase } = require("../utils.js");

module.exports = {
  description: "generate a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入组件名字(请以驼峰命名)",
      validate: notEmpty("组件名字")
    },
    {
      type: "list",
      name: "type",
      message: "请选择组件类型",
      choices: [
        {
          name: "基础组件",
          value: "basic"
        },
        {
          name: "高阶组件",
          value: "hoc"
        },
        {
          name: "布局组件",
          value: "layout"
        }
      ]
    }
  ],
  actions: data => {
    const kebabName = kebabCase(data.name);
    const componentName = camelCase(data.name);

    const actions = [
      {
        type: "add",
        path: `src/components/${kebabName}/index.vue`,
        templateFile: "plop-templates/component/index.hbs",
        data: {
          componentName,
          name: kebabName,
          template: true,
          script: true,
          style: true
        }
      },
      {
        type: "add",
        path: `src/components/${kebabName}/index.js`,
        templateFile: "plop-templates/component/export.hbs",
        data: {
          componentName
        }
      },
      {
        type: "add",
        path: `docs/component/${data.type}/${kebabName}.md`,
        templateFile: "plop-templates/component/md.hbs",
        data: {
          name: kebabName
        }
      }
      // {
      //   type: "writeIndexAction",
      //   data: {
      //     name: data.name
      //   }
      // }
    ];

    return actions;
  }
};
