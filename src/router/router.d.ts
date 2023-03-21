import 'vue-router'
// 扩展路由Meta信息
declare module 'vue-router' {
  interface RouteMeta {
    title: string // 标题
    icons?: string[] // 图标集合 传入多个时切换时有动效
    transition?: string // 过渡动画
    keepAlive?: boolean // 缓存路由 默认true
    hideInSider?: boolean // 是否隐藏 默认false（隐藏后当跳转到当前路由 侧边栏选中不会变化），主要用于打开详情页面等(不建议使用弹窗，太low ！！！)
    showFooter?: boolean // 显示页尾 默认true
  }
}
