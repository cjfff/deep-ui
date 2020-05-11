<script lang="tsx">
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
  },
  render() {
    const compProp = {
      props: this.$attrs,
      on: Object.assign({}, this.$listeners, {
        click: this.handleClick.bind(this)
      })
    };
    return (
      <el-button {...compProp} loading={this.loading} class="loading-button">
        {/** 默认slot */}
        {this.$slots.default}
      </el-button>
    );
  }
};
</script>
