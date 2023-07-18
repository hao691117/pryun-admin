<template>
  <div class="backdrop-filter navbar">
    <div class="navbar-content">
      <div class="logo">
        <div class="logo-img"></div>
        <div class="logo-text">PR云社区开放平台</div>
        <div class="logo-text logo-lable">融合治理 数智通</div>
      </div>
      <div class="content-flex-1"></div>
      <div class="menu-btn">
        <div class="menu-icon icon-search"></div>
      </div>
      <div class="menu-btn" @click="changeFullscreen(!isFullscreen)">
        <div class="menu-icon icon-screen-full"></div>
      </div>
      <el-dropdown trigger="click">
        <div class="menu-btn">
          <div class="menu-icon icon-user">
            <img class="menu-icon-img" src="https://pryun.oss-cn-chengdu.aliyuncs.com/pryun/avatars/1681185499682_A0A7.jpg" alt="" />
          </div>
          <div class="menu-text">Breathe</div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item @click="logout">注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { StoreSystem } from '@/store/system'
import { computed, ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const router = useRouter()
const storeSystem = StoreSystem()

const siderRetract = computed(() => storeSystem.siderRetract)
const breadcrumb = computed(() => storeSystem.breadcrumb)
const keepRoutes = computed(() => storeSystem.keepRoutes)

// import { useDark, useToggle } from '@vueuse/core'

// const isDark = useDark()
// const toggleDark = useToggle(isDark)

// 选中切换
const select = (path: string) => {
  router.push(path)
}

// 关闭标签
const close = (path: string) => {
  storeSystem.removeKeepRoutes(path)
}

const Breadcrumb = computed(() => {
  let arr = []
  for (const item of breadcrumb.value) {
    const { children = [] } = item
    if (children.length !== 1) {
      arr.push(item)
    }
  }
  return arr
})

const Children = computed(() => {
  return function (route: RouteRecordRaw) {
    const { children = [] } = route
    const _children = children.filter((item) => !item.meta?.hideInSider) // 过滤掉隐藏路由
    if (_children.length <= 1) return []
    return _children
  }
})

const logout = (e: any) => {
  router.push('/login')
}

const isFullscreen = ref(false)
// 全屏
const changeFullscreen = (state: boolean) => {
  if (state) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
  isFullscreen.value = state
}
</script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  /* background-color: var(--color-sider); */
  background-color: rgba(35, 36, 38, 1);
  z-index: 9;
  flex-shrink: 0;
  color: #ffffff;
}
.navbar-content {
  height: 68px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
}
.navbar-keepRoutes {
  height: 50px;
}
.logo {
  position: relative;
  box-sizing: border-box;
  padding: 16px;
  height: 78px;
  display: flex;
  align-items: stretch;
  transition: inherit;
}
.logo-img {
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  transform: scale(1.2);
  z-index: 1;
  background-image: url('@/assets/logo.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.logo-text {
  flex-shrink: 0;
  width: calc(280px - 40px - 8px - 32px);
  position: relative;
  margin-left: 16px;
  display: flex;
  font-size: 18px;
  align-items: center;
  flex-wrap: nowrap;
  transition: inherit;
  left: 0;
  opacity: 1;
}
.logo-lable {
  color: rgba(145, 146, 148, 1);
  font-size: 16px;
}
.keepRoutes-list {
  position: relative;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  /* overflow-x: overlay; */
}
.keepRoutes-list-item {
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 6px;
  padding: 0 8px;
  height: 32px;
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  transition: all 230ms ease-out;
}
.keepRoutes-list-item:hover,
.keepRoutes-list-item-active {
  background-color: #dad8d8;
}

.keepRoutes-list-item-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}
.keepRoutes-list-item-icon-img {
  width: 100%;
  height: 100%;
}
.keepRoutes-list-item-text {
  white-space: nowrap;
}
.keepRoutes-list-item-close {
  position: relative;
  margin-left: 4px;
  padding: 4px;
  line-height: 1;
  box-sizing: border-box;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  transition: all 230ms ease-out;
}
.keepRoutes-list-item-close::after {
  content: '';
  width: 100%;
  height: 100%;
  background-image: url('./static/cross.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.keepRoutes-list-item-close:hover {
  background-color: rgba(128, 128, 128, 0.5);
}

.content-flex-1 {
  width: 0;
  flex: 1;
}

.menu-btn {
  padding: 8px 16px;
  min-width: 40px;
  min-height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: all 230ms ease-out;
  cursor: pointer;
}
.menu-btn:hover {
  background-color: var(--color-pr-action-sheet-active);
}
.menu-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: invert(100%);
}
.menu-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: invert(100%);
}
.menu-icon + .menu-text {
  margin-left: 8px;
}
.icon-list {
  background-image: url('./static/list-arrow-right.png');
  transform: rotateZ(180deg);
}
.icon-list-active {
  transform: rotateZ(0deg);
}
.icon-search {
  background-image: url('./static/search.png');
}
.icon-screen-full {
  background-image: url('./static/screen-full.png');
}
.icon-refresh {
  background-image: url('./static/refresh.png');
}

.icon-user {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('data:image/png;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/wAALCACEAIQBAREA/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMFAgQGAQj/xAAuEAEAAgECAggGAgMAAAAAAAAAAQIDBBEFIRIVMUFRZKLhEyJhcYHBFFIjkdH/2gAIAQEAAD8A+gQAAACIAIgAAAAAiACIAAAAAAAAAAAAQ6vVU0mH4l+c90eMqDPrtRqLb2vaI8I5QhrkvjtvS9on6WWnD+KWm8YtRbfflF/+rcAAABz/ABbPOXXTXux/JH7aIOl4dnnPoqWtzmOU/lsgAAA5jWxMa7NE/wB5QAvuDRMaKZ8bz+lgAAACk4zpZrmjUV7L8p+ysGVa2yXila7zPKHTaXDGn01MX9Y5/dMAAADHLirmxTjvXekuXzY/g5r4+3ozMf7Rrjgunr0Z1E8532p9FsAAAA09ZxLFp6zWtunk8I7vu5+1pyXm9uczO8sW/wAO4h/EmaXrvjnn9pXmLLjzU6eO1bx9WYAACHUavFpadLJbn3R3ypdXxTNqN60/x08I7Z/DRASYc+TBfp4rWpK40nGKZdq5/knx7vdY9vOHoAA5TLlvmyTkvbeYYAALrguW9seTHa29a7bfndaAACptwKs3ma59o8Ojv+3nUXmPR7nUXmPR7nUXmPR7nUXmPR7nUXmPR7nUXmPR7nUXmPR7t3Q6KuipeIv05t2z2djaAAAAAAAAAAAAAAAAAAAAAAAB/9k=');
}
.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.breadcrumb-item {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  color: #000000;
}
.breadcrumb-item-span {
  padding: 0 8px;
  line-height: 1;
}
.breadcrumb-item-text {
  white-space: nowrap;
}

.breadcrumb-item-text-hover {
  opacity: 1;
  transition: all 230ms ease-out;
  cursor: pointer;
}

/* 对移动中的元素应用的过渡 */
.breadcrumbTransition-move,
.breadcrumbTransition-enter-active,
.breadcrumbTransition-leave-active {
  transition: all 500ms ease-out;
}

.breadcrumbTransition-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.breadcrumbTransition-leave-to {
  opacity: 0;
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.breadcrumbTransition-leave-active {
  position: absolute;
}

/* 1. 声明过渡效果 */
.keepRoutesTansition-move,
.keepRoutesTansition-enter-active,
.keepRoutesTansition-leave-active {
  transition: all 500ms cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.keepRoutesTansition-enter-from,
.keepRoutesTansition-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translateX(30px);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.keepRoutesTansition-leave-active {
  position: absolute;
}
</style>
