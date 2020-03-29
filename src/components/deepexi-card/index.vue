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

<style lang="less">
@import url("../../styles/var");

.deepexi-card {
  background: #fff;
  border-radius: 4px;
  & + .deepexi-card {
    margin-top: @margin-size;
  }
  &-title {
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #e4e8f3;
    padding: 0 @padding-size;
    font-size: 14px;
    font-weight: 500;
    color: rgba(106, 108, 115, 1);
  }
  &-content {
    padding: @padding-size;
  }
}
</style>
