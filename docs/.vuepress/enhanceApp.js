import ElementUI from '@femessage/element-ui'
import FormRenderer from '@femessage/el-form-renderer';
import DeepexiUi from '../../src/index.js'

import '@femessage/element-ui/lib/theme-chalk/index.css'
import '../../src/styles/index.less'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(DeepexiUi)
  Vue.component(FormRenderer.name, FormRenderer)
  Vue.use(ElementUI)
}