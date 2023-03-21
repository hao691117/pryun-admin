<template>
  <div class="sider" :class="[{ 'sider-min': !full }]">
    <div class="sider-content">
      <div class="logo" @click="full = !full">
        <div class="logo-img"></div>
        <div class="logo-text">PR云社区开放平台</div>
      </div>
      <div class="sider-list">
        <div class="list-item" v-for="(item, index) in dynamicRoutes" :key="index">
          <div class="list-item-icon">
            <img class="list-item-icon-img" :src="item.meta?.icons?.[0]" alt="" />
          </div>
          <div class="list-item-title">{{ item.meta?.['title'] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { ref, computed } from 'vue'
import { StoreSystem } from '@/store/system'
const storeSystem = StoreSystem()

// 动态路由列表
const dynamicRoutes = ref<RouteRecordRaw[]>(storeSystem.dynamicRoutes)

const full = ref(true)
</script>
<style scoped>
.sider {
  position: relative;
  z-index: 20;
  width: 240px;
  transition: inherit;
}
.sider-content {
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(31, 42, 61, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: inherit;
}
@supports (-webkit-touch-callout: none) {
  .sider-content {
    min-height: -webkit-fill-available;
  }
}

.logo {
  box-sizing: border-box;
  padding: 16px;
  height: 72px;
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
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
  position: relative;
  margin-left: 16px;
  display: flex;
  font-size: 18px;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  transition: inherit;
  left: 0;
  opacity: 1;
}
.sider-list {
  padding: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: overlay;
  transition: inherit;
}
.list-item {
  padding: 0 10px;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: inherit;
  border-radius: 6px;
}
.list-item + .list-item {
  margin-top: 10px;
}
.list-item:hover {
  background-color: green;
}
.list-item-icon {
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 28px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list-item-icon-img {
  height: 100%;
  width: auto;
  object-fit: cover;
}
.list-item-title {
  position: relative;
  left: 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  transition: inherit;
}
.sider-min .list-item-title {
  opacity: 0;
  left: -36px;
}
.sider-min {
  width: 72px;
}
.sider-min .logo-text {
  opacity: 0;
  left: -36px;
}
</style>
