import FormRenderer from '@femessage/el-form-renderer';
import ELEMENT from '@femessage/element-ui'
import DeepUi from '../../src/index.js'
import '../../src/theme-chalk/src/index.less'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(ELEMENT)
  Vue.use(DeepUi)
  Vue.component(FormRenderer.name, FormRenderer)
}