---
title: prompt-form
---
# prompt-form
提供Vue.prototype.$promptDialog和Vue.prototype.$prompDrawer方法，用来向用户确认信息。
类似于window.prompt方法，让用户在弹窗中填写相关信息。好处是，不需要写那么多HTML模板。

## Arguments
- [Array | Object] formOpt: 
  - [el-form-renderer](https://github.com/FEMessage/el-form-renderer)组件接受的属性content，
  - 或者是el-form-render 可接受属性的对象。eg: { content: [], width: '170px'}
- [String] title: 默认为'提示'
- [Number] width: el-form-render的宽度， 默认是600

## 基本使用

```vue live
<template>
  <div>
    <el-button @click="hleDialog" type="primary">dialog</el-button>
    <el-button @click="hleDrawer" type="primary">drawer</el-button>
  </div>
</template>

<script>
const alert = obj  => window.alert(JSON.stringify(obj, null, 2))
const basicContent = [
  { 
    id: 'name', 
    label: '名称', 
    type: 'input', 
    rules: [{ required: true, message: '缺少名称', trigger: 'blur'}] 
  },
  { 
    id: 'email', 
    label: '邮箱', 
    type: 'input', 
    rules: [{ pattern: /.+@.+/, message: '请填写正确的邮箱', trigger: 'blur'}]}
]
export default {
  methods: {
    hleDialog(){
      this.$promptDialog(basicContent, '请填写')
        .then(form => alert(form))
    },
    hleDrawer(){
      this.$promptDrawer(basicContent, '请填写')
        .then(form => alert(form))
    }
  }
}
</script>
```

## 提交信息到服务器
可以指定弹窗关闭前调用的函数，这个函数需要返回一个Promise. 只有当该Promise resolve之后，弹窗才会关闭。
你可以在这个函数提交信息到服务器。当然你也可以在关闭弹窗之后在后台提交到服务器，但是如果提交失败，用户就必须重新输入
之前的表单信息了。

```vue live
<template>
  <div>
    <el-button @click="hleDialog" type="primary">提交到服务器</el-button>
  </div>
</template>

<script>
const alert = obj  => window.alert(JSON.stringify(obj, null, 2))
const basicContent = [
  { 
    id: 'name', 
    label: '名称', 
    type: 'input', 
    rules: [{ required: true, message: '缺少名称', trigger: 'blur'}] 
  },
  { 
    id: 'email', 
    label: '邮箱', 
    type: 'input', 
    rules: [{ pattern: /.+@.+/, message: '请填写正确的邮箱', trigger: 'blur'}]}
]
export default {
  methods: {
    submitTo(form){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('form', form)
          resolve(form)
        }, 1000)
      })
    },
    hleDialog(){
      const opt = { content: basicContent, beforeClose: this.submitTo }
      this.$promptDialog(opt, '请填写')
        .then(form => alert('成功提交表单到服务器'))
    },
    
  }
}
</script>
```
