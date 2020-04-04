<template>
  <el-button
    v-bind="$attrs"
    v-on="$listeners"
    @click="handleClick"
    :loading="loading"
    class="loading-button"
  >
    <slot />
  </el-button>
</template>

<script>
export default {
  name: "LoadingButton",
  props: {
    // 点击的 function, 如果为 promise 有 loading 效果
    click: {
      type: Function,
      // () => {}
      default: () => {}
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      Promise.resolve(this.click && this.click()).finally(() => {
        this.loading = false;
      });
    }
  }
};
</script>
