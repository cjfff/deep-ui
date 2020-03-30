---
title: text-tooltip
---
# text-tooltip

当一些内容固定宽度，然后需要超出宽度部分隐藏的时候，为了防止重复书写这种 css....特产出此组件

## 基本使用

```vue live
<template>
    <ClientOnly>
        <text-tooltip style="width:100px" content="啊啊啊啊3f啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></text-tooltip>
    </ClientOnly>
</template>
```

## 多行截断

```vue live
<template>
    <ClientOnly>
        <text-tooltip style="width:100px" :line="2" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></text-tooltip>
    </ClientOnly>
</template>
```

<[vuese](text-tooltip/index.vue)
