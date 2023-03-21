import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { StoreSystem } from '@/store/system'

// 静态路由
// 静态路由不会校验权限如果没有找到路由会跳转到404、403
const routes = [
  {
    path: '/',
    redirect: '/workbench',
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/login-index.vue'),
  },
  {
    path: '/:path(.*)',
    meta: {
      title: '页面找不到',
    },
    component: () => import('@/views/error/error-404.vue'),
  },
]

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL
const router = createRouter({
  history: true ? createWebHistory(`/${VITE_BASE_URL}`) : createWebHashHistory(`/${VITE_BASE_URL}`), // 路由模式
  routes,
})

router.beforeEach(async (to, from, next) => {
  console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:to`, to)
  // 初始化系统数据
  const storeSystem = StoreSystem()
  const needReplace: any = await storeSystem.init() // 初始化系统store数据
  if (needReplace) return next({ ...to, replace: true })
  next()
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router
