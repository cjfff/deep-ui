<template>
  <el-dialog
    v-bind="$attrs"
    v-on="$listeners"
    :visible="visible"
    :before-close="handleBeforeClose"
    @update:visible="$emit('update:visible', $event)"
    class="loading-dialog"
  >
    <div slot="title" v-if="$slots.title">
      <my-render :render="$slots.title"></my-render>
    </div>
    <slot></slot>
    <slot name="footer">
      <span slot="footer" class="dialog-footer" v-if="hasFooter">
        <slot name="footer-area" />
        <el-button @click="handleBeforeClose">{{ cancelButtonText }}</el-button>
        <el-button
          type="primary"
          :disabled="
            typeof confirmDisabled === 'function'
              ? confirmDisabled()
              : confirmDisabled || btnLoading
          "
          @click="handleComfirm"
          :loading="btnLoading"
          >{{ confirmButtonText }}</el-button
        >
      </span>
    </slot>
  </el-dialog>
</template>

<script>
import MyRender from "./render.js";

export default {
  name: "LoadingDialog",
  inheritAttrs: false,
  components: {
    MyRender
  },
  props: {
    /**
     * 是否显示 dialog
     */
    visible: {
      type: Boolean,
      // false
      default: false
    },
    // 确定按钮文字
    confirmButtonText: {
      type: String,
      // 确定
      default: "确定"
    },
    // 取消按钮文字
    cancelButtonText: {
      type: String,
      // 取消
      default: "取消"
    },
    /**
     * 是否有底部栏
     */
    hasFooter: {
      type: Boolean,
      // true
      default: true
    },

    /**
     * 关闭前会执行检查是否可以关闭
     */
    beforeClose: {
      type: Function,
      default: () => true
    },
    /**
     * 点击按钮触发的事件，传入对应的处理 promise 可以达到 loading 的效果
     */
    confirm: {
      type: Function,
      // () => true
      default: () => true
    },
    // 禁用提交按钮
    confirmDisabled: {
      type: [Function, Boolean],
      // false
      default: false
    }
  },
  data() {
    return {
      btnLoading: false
    };
  },
  methods: {
    handleBeforeClose() {
      Promise.resolve(this.beforeClose()).then(flag => {
        if (!flag) return;
        this.handleClose();
      });
    },
    handleClose() {
      /**
       * 双向绑定 visible
       */
      this.$emit("update:visible", false);
      /**
       * 关闭弹窗会执行
       */
      this.$emit("close");
    },
    handleComfirm() {
      this.btnLoading = true;

      Promise.resolve(this.confirm())
        .then(flag => {
          if (!flag) return;
          /**
           * confirm 事件完成时触发
           */
          this.$emit("confirm");
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.btnLoading = false;
        });
    }
  }
};
</script>
