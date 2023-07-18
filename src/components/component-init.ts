import ContentTable from '@/components/ContentTable/ContentTable.vue'

import 'element-plus/dist/index.css'
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
