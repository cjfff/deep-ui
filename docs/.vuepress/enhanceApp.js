import FormRenderer from '@femessage/el-form-renderer';
import DeepexiUi from '../../src/index.js'
import '../../src/styles/index.less'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(DeepexiUi)
  Vue.component(FormRenderer.name, FormRenderer)
}