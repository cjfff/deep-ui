---
title: loading-dialog
---
# loading-dialog

该组件内置了 `el-footer`，以及发送请求自动对 `confirm` 按钮进行 `loading`, 从细节上减少您的工作量~

```vue live
<template>
  <div>
    <loading-dialog
      title="标题"
      :visible.sync="visible"
      :confirm="handleConfirm"
    >
        <el-form-renderer :content="content" v-model="data">
        </el-form-renderer>
    </loading-dialog>
    <el-button @click="visible = true">打开弹窗</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      data: {},
      content: [
            {
                label: '用户名',
                id: 'username',
                type: 'input',
                el: {
                    type: 'username',
                    placeholder: '请输入密码'
                }
            },
            {
                label: '密码',
                id: 'password',
                type: 'input',
                el: {
                    type: 'password',
                    placeholder: '请输入密码'
                }
            }
        ]
    };
  },
  methods: {
    handleConfirm() {
      return new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
};
</script>
```


<[vuese](loading-dialog/index.vue)