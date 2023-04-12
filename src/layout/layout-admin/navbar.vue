<template>
  <div class="backdrop-filter navbar">
    <div class="menu-btn" @click="storeSystem.setSiderRetract(!siderRetract)">
      <div class="menu-icon icon-list" :class="[{ 'icon-list-active': siderRetract }]"></div>
    </div>
    <div class="breadcrumb">
      <TransitionGroup name="list">
        <div class="breadcrumb-item" v-for="(item, index) in Breadcrumb" :key="item.path">
          <div v-if="index !== 0" class="breadcrumb-item-span">/</div>
          <div class="breadcrumb-item-text">
            {{ item.meta?.title }}
          </div>
        </div>
      </TransitionGroup>
    </div>
    <div class="content"></div>
    <div class="menu-btn">
      <div class="menu-icon icon-search"></div>
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
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { StoreSystem } from '@/store/system'
import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
const storeSystem = StoreSystem()

const siderRetract = computed(() => storeSystem.siderRetract)
const breadcrumb = computed(() => storeSystem.breadcrumb)

// import { useDark, useToggle } from '@vueuse/core'

// const isDark = useDark()
// const toggleDark = useToggle(isDark)

const Hide = computed(() => {
  return function (route: RouteRecordRaw) {
    const { children = [] } = route
    if (children.length === 1) return false
    return true
  }
})

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

const router = useRouter()
const logout = (e: any) => {
  router.push('/login')
}
</script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  height: 78px;
  flex-shrink: 0;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 9;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  background-color: var(--color-sider);
  gap: 8px;
}
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 500ms ease-out;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(80px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
.content {
  width: 0;
  flex: 1;
}

.menu-btn {
  padding: 12px 16px;
  min-width: 44px;
  min-height: 44px;
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
}
.menu-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
}
.breadcrumb-item-span {
  padding: 0 8px;
}
.breadcrumb-item-text {
  white-space: nowrap;
}
.breadcrumb-item-hover:hover {
  color: #0097ff;
}
</style>
