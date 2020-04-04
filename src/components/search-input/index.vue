<template>
  <el-input
    class="search-input"
    prefix-icon="search-icon"
    v-model="keyword"
    @keydown.native.enter="change"
    clearable
    v-bind="$attrs"
    v-on="$listeners"
  ></el-input>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    // 绑定的值
    value: {
      type: String,
      // ""
      default: ""
    }
  },
  computed: {
    keyword: {
      set(val) {
        /**
         * @arg value
         * 双向绑定 emit
         */
        this.$emit("input", val);
      },
      get() {
        return this.value;
      }
    }
  },
  methods: {
    change() {
      /**
       * @vuese
       * @arg value
       * 改变的时候就会触发
       */
      this.$emit("change", this.keyword);
    }
  }
};
</script>
