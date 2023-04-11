import type { RouteRecordRaw } from 'vue-router'
import { icons } from './icon'

// 动态路由
export const dynamicRoutes: RouteRecordRaw[] = [
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
  {
    name: 'overview',
    path: '/overview',
    meta: { icons: [icons.relation], title: '系统总览' },
    redirect: '/overview/overview-index',
    children: [
      {
        name: 'overview-index',
        path: '/overview/overview-index',
        meta: {
          icons: [icons.icon_vue],
          title: '系统总览',
          showFooter: false,
        },
        component: () => import('../views/overview/overview-index.vue'),
      },
    ],
  },
  {
    name: 'datav',
    path: '/datav',
    meta: { icons: [icons.relation], title: '可视化大屏' },
    redirect: '/datav/datav-index',
    children: [
      {
        name: 'datav-index',
        path: '/datav/datav-index',
        meta: {
          icons: [icons.icon_vue],
          title: '可视化大屏',
          showFooter: false,
        },
        component: () => import('../views/datav/datav-index.vue'),
      },
    ],
  },
  {
    name: 'apis',
    path: '/apis',
    meta: { icons: [icons.relation], title: 'API管理' },
    redirect: '/apis/apis-index',
    children: [
      {
        name: 'apis-index',
        path: '/apis/apis-index',
        meta: {
          icons: [icons.icon_vue],
          title: 'API管理',
          showFooter: false,
        },
        component: () => import('../views/apis/apis-index.vue'),
      },
    ],
  },
  {
    name: 'test',
    path: '/test',
    redirect: '/test/test-index',
    meta: { icons: [icons.share_fill], title: '测试示例' },
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
    name: 'users',
    path: '/users',
    meta: { icons: [icons.relation], title: '用户管理' },
    redirect: '/users/users-brisk',
    children: [
      {
        name: 'users-brisk',
        path: '/users/users-brisk',
        meta: {
          icons: [icons.icon_vue],
          title: '活跃分析',
        },
        component: () => import('../views/users/users-brisk.vue'),
      },
      {
        name: 'users-index',
        path: '/users/users-index',
        meta: {
          icons: [icons.icon_vue],
          title: '用户列表',
          hideInSider: true,
        },
        component: () => import('../views/users/users-index.vue'),
      },
      {
        name: 'users-info',
        path: '/users/users-info',
        meta: {
          icons: [icons.icon_vue],
          title: '用户详情',
          hideInSider: true,
        },
        component: () => import('../views/users/users-info.vue'),
      },
    ],
  },
  {
    name: 'set',
    path: '/set',
    meta: { icons: [icons.set], title: '系统设置' },
    redirect: '/set/set-theme',
    children: [
      {
        name: 'set-theme',
        path: '/set/set-theme',
        meta: {
          icons: [icons.icon_vue],
          title: '主题设置',
        },
        component: () => import('../views/set/set-theme.vue'),
      },
    ],
  },
]
