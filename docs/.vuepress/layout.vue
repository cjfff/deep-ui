<template>
  <div
    class="online-vue-editor"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="online-vue-editor-preview">
      <slot name="preview"></slot>
    </div>
    <div class="online-vue-editor-main">
      <transition name="height-slide">
        <div v-show="showCode" class="online-vue-editor-main-code">
          <span
            class="copy"
            :class="{'is-success': copySuccess}"
            @click="handleCopy"
            >{{ copyMsg }}</span
          >
          <slot name="editor"></slot>
        </div>
      </transition>
      <div class="online-vue-editor-main-button" @click="handleClickButton">
        <transition name="arrow-slide">
          <span
            class="tringle"
            :class="{hovering: hovering, reverse: showCode}"
          ></span>
        </transition>
        <transition name="text-slide">
          <span v-show="hovering">{{ controlText }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineVueLayout',
  data() {
    return {
      showCode: false,
      hovering: false,
      copySuccess: false
    }
  },
  computed: {
    controlText() {
      return this.showCode ? '隐藏代码' : '显示代码'
    },
    copyMsg() {
      return this.copySuccess ? 'SUCCESS' : 'COPY'
    }
  },
  methods: {
    handleClickButton() {
      this.showCode = !this.showCode
    },
    handleCopy() {
      const getCode = list =>
        list.reduce((acc, item) => {
          return item.code && item.code
        }, '')

      const input = document.createElement('input')
      input.style.visibility = 'none'
      input.value = getCode(this.$children)
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      this.copySuccess = true
      setTimeout(() => {
        this.copySuccess = false
      }, 2000)
    }
  }
}
</script>

<style lang="less">
.online-vue-editor {
  @primary-color: #409eff;

  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px auto;
  border: 1px solid #ebebeb;
  background: #fff;
  border-radius: 3px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  &-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 100px;
  }

  &-main {
    &-code {
      position: relative;
      .copy {
        cursor: pointer;
        position: absolute;
        padding: 4px;
        right: 8px;
        top: 4px;
        color: #fff;
        font-size: 14px;
        &:hover {
          color: @primary-color;
        }
        &.is-success {
          filter: brightness(120%);
        }
      }
    }
    &-button {
      border-top: solid 1px #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;

      &.is-fixed {
        position: fixed;
        bottom: 0;
        width: 868px;
      }

      .text-slide-enter,
      .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }

      > span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: 0.3s;
        display: inline-block;
      }

      > .tringle {
        position: absolute;
        width: 0;
        line-height: 44px;
        height: 0;
        top: 8px;
        border: 8px solid transparent;
        border-bottom: 12px solid #d3dce6;

        &.reverse {
          top: 16px;
          border: 8px solid transparent;
          border-top: 12px solid #d3dce6;
        }

        &.hovering {
          transform: translateX(-50px);
        }
      }
      &:hover {
        color: #409eff;
        background-color: #f9fafc;
        .tringle {
          border: 8px solid transparent;
          border-bottom: 12px solid #409eff;
        }
        .tringle.reverse {
          border: 8px solid transparent;
          border-top: 12px solid #409eff;
        }
      }
    }
  }

  /**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: #ccc;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1.5rem;
    margin: 0.5em 0;
    border-radius: 0;
    font-size: 12px;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #2d2d2d;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
}
</style>
