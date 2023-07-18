import ContentTable from '@/components/ContentTable/ContentTable.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default {
  install: (app: any) => {
    app.component('ContentTable', ContentTable)
    app.use(ElementPlus)
  },
}
