---
title: loading-button
---
# loading-button

懒人专用，小写一个 `loading` 效果，传入 `promise` 就会在 `promise pending` 期间产生 `loading` 的效果，`resolve` 或者 `rejected` 后结束。 

## 基本使用

```vue live
<template>
    <loading-button :click="click">click me</loading-button>
</template>

<script>
export default {
    methods: {
        click() {
            return new Promise((resolve) => setTimeout(() => {
                console.log('do something')    
                resolve()
            }, 2000))
        }
    }
}
</script>
```

<[vuese](@/loading-button/index.vue)