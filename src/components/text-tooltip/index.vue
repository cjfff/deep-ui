<script>
export default {
  name: "TextTooltip",
  props: {
    /**
     * @vuese
     * 是否启用 tooltip 不启用就把 content 作为 DOM 元素的 title 属性使用
     */
    enableTooltip: {
      type: Boolean,
      // true
      default: true
    },
    // 显示的内容，如果超出长度则会显示为省略号
    content: {
      type: [String, Number],
      // ""
      default: ""
    },
    // 额外注入 class
    className: String,
    // 限制内容为本应为多小行，超出显示省略号, 默认 -1，不启用，为正数则启用
    line: {
      type: Number,
      // -1
      default: -1
    }
  },
  data() {
    return {
      disabled: true
    };
  },
  computed: {
    classes() {
      return ["text-tooltip", this.line < 0 && "ellipsis", this.className];
    },
    style() {
      const lineStyle = {
        display: "-webkit-box",
        "-webkit-line-clamp": this.line,
        "-webkit-box-orient": "vertical",
        "word-break": "break-word"
      };

      return this.line > 0 ? lineStyle : {};
    },
    title() {
      return !this.enableTooltip && !this.disabled && this.content;
    }
  },
  watch: {
    content: {
      /**
       * 关键代码，根据内容判断是否溢出，溢出才开启 tooltip
       */
      handler() {
        this.$nextTick(() => {
          const el = this.$refs.text;

          // 如果输入了行数, 需要判断高度是否溢出
          if (this.line > 0) {
            this.disabled = !(el.scrollHeight > el.offsetHeight);
            return;
          }
          // 当滚动宽度超出现实宽度的时候就需要 tootip
          this.disabled = !(el.scrollWidth > el.offsetWidth);
        });
      },
      immediate: true
    }
  },
  render() {
    // 是否
    const { enableTooltip, classes, disabled, style, content, title } = this;

    const textDom = () => (
      <span ref="text" class={classes} style={style} title={title}>
        {this.$slots.default ? this.$slots.default : content}
      </span>
    );

    const elToolTips = () => (
      <el-tooltip
        effect="dark"
        placement="top-start"
        disabled={disabled}
        content={content || this.$slots.default}
      >
        {textDom()}
      </el-tooltip>
    );
    return enableTooltip ? elToolTips() : textDom();
  }
};
</script>
