---
title: deepexi-card
---
# deepexi-card

## 基本使用

```vue live
<template>
    <deepexi-card title="登陆" style="background: #efefef;">
      <el-form-renderer :content="content" v-model="data" label-position="top" ref="form">
        <el-button type="primary">登陆</el-button>
      </el-form-renderer>
      <div>{{data}}</div>
    </deepexi-card>
</template>

<script>
export default {
    data() {
        return {
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
        }
    }
}
</script>
```

<[vuese](deepexi-card/index.vue)
