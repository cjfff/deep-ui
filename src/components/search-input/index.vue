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

<style lang="less">
.search-input {
  width: 240px;
  z-index: 10;

  .search-icon /deep/ {
    display: inline-block;
    width: 14px;
    margin-left: 5px;
    background: url("https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services-dashboard/common/search.svg")
      center / contain no-repeat;
  }

  .el-icon-search:before {
    font-size: 20px;
    color: #eee;
  }

  .el-input__inner {
    padding-left: 34px;
    border: none;
    border: 1px solid #eee;

    &:focus {
      border: 1px solid #bcc3d9;
    }
  }
}
</style>
