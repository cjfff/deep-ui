<template>
  <el-drawer
    class="drawer"
    :visible="visible"
    @update:visible="$emit('update:visible', $event)"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="drawer-content">
      <slot></slot>
      <div class="footer">
        <el-button @click="$emit('update:visible', false)">{{
          disabled ? "关闭" : "取消"
        }}</el-button>
        <loading-button type="primary" v-if="!disabled" :click="sureHandler"
          >确定</loading-button
        >
      </div>
    </div>
  </el-drawer>
</template>
<script>
import LoadingButton from "../loading-button/index.vue";
export default {
  props: {
    disabled: Boolean,
    sureHandler: Function,
    visible: Boolean
  },
  components: {
    LoadingButton
  }
}
</script>
<style lang="less" scoped>
.drawer{
  /deep/ .el-drawer__body{
    overflow: auto;
  }
}
.drawer-content{
  padding-bottom: 60px;
}
.footer{
  padding: 10px 0;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f6fa;
  .el-button{
    width: 80px;
  }
}
</style>
