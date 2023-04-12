<template>
  <div class="backdrop-filter navbar">
    <div class="menu-btn" @click="change_sider_retract">
      <div class="menu-icon icon-list" :class="[{ 'icon-list-active': sider_retract }]"></div>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>测试示例</el-breadcrumb-item>
      <el-breadcrumb-item>示例二</el-breadcrumb-item>
    </el-breadcrumb>
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
import { sider_retract, change_sider_retract } from './com-data'

// import { useDark, useToggle } from '@vueuse/core'

// const isDark = useDark()
// const toggleDark = useToggle(isDark)

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
  background-color: var(--color-pr-navbar-bg);
  gap: 8px;
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
</style>
