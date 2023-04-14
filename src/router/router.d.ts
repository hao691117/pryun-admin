import 'vue-router'
// 扩展路由Meta信息
declare module 'vue-router' {
  interface RouteMeta {
    title: string // 标题
    icons?: string[] // 图标集合 传入多个时切换时有动效
    transition?: string // 过渡动画
    keepAlive?: boolean // 缓存路由 默认true
    hideInSider?: string // 是否隐藏在侧边栏 默认不隐藏（隐藏后当跳转到当前路由 侧边栏选中索引），主要用于打开详情页面等
    showFooter?: boolean // 显示页尾 默认true
  }
}
