import type { RouteRecordRaw } from 'vue-router'
import { icons } from './icon'

// 动态路由
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    name: 'test',
    path: '/test',
    redirect: '/test/test-index',
    meta: { icons: [icons.icon_vue], title: '测试示例' },
    children: [
      {
        name: 'test-index',
        path: '/test/test-index',
        component: () => import('@/views/test/test-index.vue'),
        meta: {
          icons: [icons.icon_vue],
          title: '示例一',
        },
      },
      {
        name: 'test-details',
        path: '/test/test-details',
        component: () => import('@/views/test/test-details.vue'),
        meta: {
          icons: [icons.icon_vue],
          title: '详情',
          hideInSider: true,
        },
      },
    ],
  },
  {
    name: 'workbench',
    path: '/workbench',
    meta: { icons: [icons.icon_vue], title: '工作台' },
    redirect: '/workbench/workbench-index',
    children: [
      {
        name: 'workbench-index',
        path: '/workbench/workbench-index',
        meta: {
          icons: [icons.icon_vue],
          title: '工作台',
          showFooter: false,
        },
        component: () => import('../views/workbench/workbench-index.vue'),
      },
    ],
  },
]
