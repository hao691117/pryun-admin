import ContentTable from '@/components/ContentTable/ContentTable.vue'

import '@/styles/index.css'
import '@/styles/iconfont.js'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  install: (app: any) => {
    app.component('ContentTable', ContentTable)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
