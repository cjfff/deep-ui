import Vue from "vue";
import { geneDialogWrapper, geneDrawerWrapper } from "./gene-wrapper";
let boxId = 0;

// eslint-disable-next-line no-unused-vars
function createPrompt(PromptWrapper, title, formOpt) {
  // formOpt的处理
  const formOpts = [];
  if (Array.isArray(formOpt.content)) {
    formOpts.push(formOpt);
  }
  const geneRef = i => `form${i}`;
  const geneVueOpt = (resolve, reject) => {
    return {
      data() {
        return {
          visible: false,
          id: `prompt-${boxId++}`,
          defaultLoading: false,
          sureLoading: false
        };
      },
      destroyed() {
        const child = document.getElementById(this.id);
        child && document.body.removeChild(child);
      },
      methods: {
        prompt() {
          this.visible = true;
        },
        shutdown() {
          this.visible = false;
        },
        handleClosed() {
          this.$destroy();
          // dialog 或者 drawer关闭的时候一律reject
          // 根据Promise的状态不可逆，这不会影响到已经resolve状态的Promise
          reject(new Error("cancel"));
        },
        async handleSure() {
          let forms = [];

          try {
            if (formOpts.length <= 1) {
              const ref = this.$refs[geneRef(0)];
              forms = ref.getFormValue();
              await ref.validate();
            }
          } catch {
            return;
          }

          if (typeof formOpt.beforeClose === "function") {
            this.sureLoading = true;
            await formOpt.beforeClose(forms).finally(() => {
              this.sureLoading = false;
            });
          }
          resolve(forms);
          this.shutdown();
        }
      },
      mounted() {
        // TODO: 将rule validator函数绑定this到当前form
        /* formOpts.forEach((opt) => {
          (opt.content || []).forEach(item => {
            (item.rules || []).forEach(rule => {
              if (typeof rule.validator === 'function') {
                const validator = rule.validator
                rule.validator = (...rest) => {
                  validator.call({}, ...rest);
                };
              }
            });
          });
        }); */
      },
      components: { PromptWrapper },
      render() {
        const _this = this;
        const visiListener = {
          on: {
            "update:visible"() {
              _this.shutdown();
            }
          }
        };
        const renderForm = (opt, ref) => {
          const { labelWidth = "120px", content, ...rest } = opt;
          return (
            <el-form-renderer
              ref={ref}
              v-loading={this.defaultLoading}
              class="prompt-form-render"
              labelWidth={labelWidth}
              content={content}
              {...{ props: rest }}
            ></el-form-renderer>
          );
        };

        let body = null;
        // 单个表单
        if (formOpts.length <= 1) {
          body = renderForm(formOpts[0], geneRef(0));
        }
        return (
          <prompt-wrapper
            id={this.id}
            visible={this.visible}
            {...visiListener}
            title={title}
            sureLoading={this.sureLoading}
            onCancel={this.shutdown}
            onClosed={this.handleClosed}
            onSure={this.handleSure}
          >
            {body}
          </prompt-wrapper>
        );
      }
    };
  };
  return new Promise((resolve, reject) => {
    const box = document.createElement("div");
    document.body.appendChild(box);
    // 实例化并且挂载
    const comp = (window.comp = new Vue(geneVueOpt(resolve, reject)));
    comp.$mount(box);

    comp.prompt();
    // nextTick 确保el-form-render已经渲染
    Vue.nextTick(() => {
      const initDefaultValue = (opt, index) => {
        const ref = comp.$refs[geneRef(index)];
        const defaultValue = opt.defaultValue;
        if (typeof defaultValue === "function") {
          comp.defaultLoading = true;
          defaultValue()
            .then(res => ref.updateForm(res))
            .finally(() => (comp.defaultLoading = false));
        } else {
          ref.updateForm(defaultValue || {});
        }
      };
      // 设置每个表单的初始值
      formOpts.forEach((form, index) => initDefaultValue(form, index));
    });
  });
}

/**
 *
 * @param {*} formOpt | el-form-render 配置对象 或者是
 * {
 *    beforeClose: fn, //点击确定之后调用的函数，必须得返回一个promise, promise resolve 后将会关闭对话框
 *    content: el-form-render 配置对象,
 *     defaultValue: 表单的初始值
 * }
 * @param {*} title
 */
export function promptDialog(formOpt, title, width) {
  const opt = Array.isArray(formOpt) ? { content: formOpt } : formOpt;
  return createPrompt(geneDialogWrapper(width), formOpt.title || title, opt);
}

/**
 * @param {*} formOpt | el-form-render 配置对象 或者是
 * {
 *    beforeClose: fn, //点击确定之后调用的函数，必须得返回一个promise, promise resolve 后将会关闭对话框
 *    content: el-form-render 配置对象,
 *    defaultValue: 表单的初始值
 * }
 * @param {*} title
 */
export function promptDrawer(formOpt, title, width) {
  const opt = Array.isArray(formOpt) ? { content: formOpt } : formOpt;
  return createPrompt(geneDrawerWrapper(width), formOpt.title || title, opt);
}
