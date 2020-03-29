import ElementUI from '@femessage/element-ui'
import '@femessage/element-ui/lib/theme-chalk/index.css'
import FormRenderer from '@femessage/el-form-renderer';
import DeepexiUi from '../../src/index.js'
import "../../src/styles/index.less"

export default ({
  Vue,
  options,
  router
}) => {
  console.log(DeepexiUi, FormRenderer);
  Vue.use(DeepexiUi)
  Vue.component(FormRenderer.name, FormRenderer)
  Vue.use(ElementUI)
}