<template>
  <div class="deepexi-card">
    <div class="deepexi-card-title">{{ title }}</div>
    <div class="deepexi-card-content">
      <!-- 内容区域 -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "DeepexiCard",
  props: {
    // 标题
    title: String
  }
};
</script>
