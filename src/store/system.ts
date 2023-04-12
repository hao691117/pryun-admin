import router from '@/router/index'
import { dynamicRoutes } from '@/router/dynamicRoutes'

import type { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'

import Layout from '@/layout/index.vue'

// 系统相关的

export const StoreSystem = defineStore('StoreSystem', {
  // 持久化列表
  persist: [
    {
      paths: ['dynamicRoutes', 'siderRetract', 'siderExpands', 'sidebarActivePath', 'breadcrumb', 'keepRoutes'],
      storage: localStorage,
    },
  ],
  state: () => {
    return {
      first: true, // 首次进入需要重新初始化路由
      dynamicRoutes: [] as RouteRecordRaw[], // 用户可访问的动态路由

      siderRetract: false, // 是否收回侧边栏
      siderExpands: [] as string[], // 侧边栏展开项

      sidebarActivePath: '', // 当前侧边栏索引
      breadcrumb: [], // 面包屑
      keepRoutes: [], // 缓存路由
    }
  },
  actions: {
    setSiderExpands(arr: string[]) {
      this.siderExpands = arr
    },
    setSiderRetract(state: boolean) {
      this.siderRetract = state
    },
    // 设置侧边栏索引
    setSidebarActivePath(path: string) {
      this.sidebarActivePath = path
    },
    // 设置缓存路由
    setKeepRoutes(keepRoutes = []) {
      this.keepRoutes = keepRoutes
    },
    // 设置面包屑
    setBreadcrumb(breadcrumb = []) {
      this.breadcrumb = breadcrumb
    },
    // 初始化系统数据
    async init() {
      // 刷新后需要重新加载路由
      let _first = this.first
      if (_first) {
        this.first = false
        // 尝试获取用户信息
        // this.init_userInfo()
        // 尝试获取用户路由
        this.dynamicRoutesInit()
      }
      return _first
    },
    change() {
      this.setSidebarActivePath(router.currentRoute.value.path)
    },
    // 初始化动态路由
    async dynamicRoutesInit(routesPath = []) {
      // 过滤合法路由
      const dynamicRoutesFilter = (routes: any) => {
        return dynamicRoutes
        // return new Promise((resolve, reject) => {
        //   // 检测当前路由是否被服务端认可 返回合法路由 不合法返回null
        //   const dynamicRouteFilter = (dynamicRoute: any, routes: DynamicRoute[]) => {
        //     // console.log(`---------->日志输出:routes`, routes)
        //     // 将服务端routes 与本地 dynamicRoutes 进行对比 取合集
        //     let _dynamicRoute = null // 默认不合法

        //     // 遍历服务端路由
        //     let routesMap = (_routes: DynamicRoute[]) => {
        //       for (const _route of _routes) {
        //         if (_route.path === dynamicRoute.path) {
        //           _dynamicRoute = dynamicRoute
        //           break
        //         }
        //         if (_route.children && _route.children.length !== 0) {
        //           routesMap(_route.children)
        //         }
        //       }
        //     }
        //     routesMap(routes)
        //     return _dynamicRoute
        //   }
        //   // 申明最终的合法路由
        //   let _dynamicRoutes: DynamicRoute[] = []
        //   // 遍历检测所有路由路由是否合法 如果合法才添加到新数组
        //   for (const dynamicRoute of dynamicRoutes) {
        //     let _dynamicRoute = dynamicRouteFilter(dynamicRoute, routes)
        //     if (_dynamicRoute) {
        //       _dynamicRoutes.push(_dynamicRoute)
        //     }
        //   }
        //   // console.log(`---------->日志输出:_dynamicRoutes`, _dynamicRoutes)
        //   resolve(_dynamicRoutes)
        // })
      }
      // 获取合法路由
      let _dynamicRoutes: any = await dynamicRoutesFilter(routesPath)
      // 遍历 注册合法路由
      for (const dynamicRoute of _dynamicRoutes) {
        // 加载layout组件
        dynamicRoute.component = () => new Promise((resolve) => resolve(Layout))
        // 注册路由
        router.addRoute(dynamicRoute)
      }
      router.replace(router.currentRoute.value.fullPath)
      // 将路由存入store
      this.dynamicRoutes = _dynamicRoutes
    },
  },
})
