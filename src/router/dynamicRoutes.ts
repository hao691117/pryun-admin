import type { RouteRecordRaw } from 'vue-router'
import { icons } from './icon'

// 动态路由
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    name: 'test',
    path: '/test',
    redirect: '/test/test-index',
    meta: { icons: [icons.relation], title: '测试示例' },
    children: [
      {
        name: 'test-index',
        path: '/test/test-index',
        component: () => import('@/views/test/test-index.vue'),
        meta: {
          icons: [icons.share_fill],
          title: '示例一',
        },
      },
      {
        name: 'test-details',
        path: '/test/test-details',
        component: () => import('@/views/test/test-details.vue'),
        meta: {
          icons: [icons.set],
          title: '详情',
          hideInSider: true,
        },
      },
    ],
  },
  {
    name: 'test2',
    path: '/test2',
    redirect: '/test2/test-index',
    meta: { icons: [icons.exterior], title: '测试示例2' },
    children: [
      {
        name: 'test2-index',
        path: '/test2/test-index',
        component: () => import('@/views/test2/test2-index.vue'),
        meta: {
          icons: [icons.icon_vue],
          title: '示例一',
        },
      },
      {
        name: 'test2-details',
        path: '/test2/test-details',
        component: () => import('@/views/test2/test2-details.vue'),
        meta: {
          icons: [icons.icon_vue],
          title: '详情',
          hideInSider: true,
        },
      },
      {
        name: 'test2-details2',
        path: '/test2/test-details2',
        component: () => import('@/views/test2/test2-details2.vue'),
        meta: {
          icons: [icons.icon_vue],
          title: '详情2',
          hideInSider: true,
        },
      },
    ],
  },
  {
    name: 'workbench',
    path: '/workbench',
    meta: { icons: [icons.relation], title: '工作台' },
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
