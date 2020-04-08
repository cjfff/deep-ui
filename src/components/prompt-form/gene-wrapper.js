import Drawer from "./drawer"; // hack: 因为 el-drawer对超过屏幕的内容不会应用滚动条

export function geneDialogWrapper(width = 600) {
  return {
    props: {
      visible: Boolean,
      title: String,
      sureLoading: Boolean
    },
    methods: {
      proxyEvent(eventType, ...rest) {
        return () => this.$emit(eventType, rest);
      }
    },
    render() {
      const footerStyle = {
        textAlign: "right"
      };
      const handleUpdateVisible = val => {
        this.proxyEvent("update:visible", val)();
      };
      const visiListener = {
        on: {
          "update:visible": handleUpdateVisible
        }
      };
      return (
        <el-dialog
          width={`${width + 100}px`}
          title={this.title}
          visible={this.visible}
          {...visiListener}
          onClosed={this.proxyEvent("closed")}
        >
          <div style="padding-left:40px;padding-right:40px;">
            {this.$slots.default}
          </div>
          <div slot="footer" style={footerStyle}>
            <el-button onClick={this.proxyEvent("cancel")}>取 消</el-button>
            <el-button
              type="primary"
              onClick={this.proxyEvent("sure")}
              loading={this.sureLoading}
            >
              确 定
            </el-button>
          </div>
        </el-dialog>
      );
    }
  };
}

export function geneDrawerWrapper(width = 600) {
  return {
    props: {
      visible: Boolean,
      title: String
    },
    components: {
      Drawer
    },
    methods: {
      proxyEvent(eventType, ...rest) {
        return () => this.$emit(eventType, rest);
      },
      sureHandler() {
        this.proxyEvent("sure")();
        return Promise.resolve();
      }
    },
    render() {
      const _this = this;
      const spread = {
        on: {
          "update:visible"(val) {
            _this.proxyEvent("update:visible", val)();
          }
        }
      };
      return (
        <drawer
          title={this.title}
          visible={this.visible}
          {...spread}
          sureHandler={this.sureHandler}
          onClosed={this.proxyEvent("closed")}
          size={`${width + 100}px`}
        >
          <div style={`width:${width}px;margin:0 auto;`}>
            {this.$slots.default}
          </div>
        </drawer>
      );
    }
  };
}
