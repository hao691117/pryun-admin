import ContentTable from '@/components/ContentTable/ContentTable.vue'

import '@/styles/index.css'
import '@/styles/iconfont.js'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default {
  install: (app: any) => {
    app.component('ContentTable', ContentTable)
  },
}
