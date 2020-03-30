---
title: list-container
---
# list-container

简单易用的形式实现 `tab` 点击切换效果，无论是配合动态组件渲染还是内容修改，都及其容易扩展!

## 基本使用

```vue live
<template>
  
    <div>
    <ClientOnly>
      <list-container v-model="value" :tabs="routes" @change="handleChange"/>
    </ClientOnly>  
      <div>
        绑定的数据:
        {{value}}
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "/dashboard/edit/info",
      routes: [
        {
          label: '基本信息',
          value: '/dashboard/edit/info',
        },
        {
          label: '数据配置',
          value: '/dashboard/edit/data',
        },
        {
          label: '权限管理',
          value: '/dashboard/edit/permission',
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
};
</script>
```



## slot header

```vue live
<template>
    <div>
    <ClientOnly>
      <list-container v-model="value" :tabs="tabs" @change="handleChange">
        <div slot="header">
          this is header slot
        </div>
      </list-container>
    </ClientOnly>
      <div>
        绑定的数据:
        {{value}}
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "/dashboard/edit/info",
      tabs: [
        {
          label: '基本信息',
          value: '/dashboard/edit/info',
        },
        {
          label: '数据配置',
          value: '/dashboard/edit/data',
        },
        {
          label: '权限管理',
          value: '/dashboard/edit/permission',
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
};
</script>
```

<[vuese](list-container/index.vue)
