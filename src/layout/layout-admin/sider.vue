<template>
  <div class="sider" :class="[{ 'sider-min': !sider_full }]">
    <div class="sider-content">
      <div class="logo">
        <div class="logo-img"></div>
        <div class="logo-text">PR云社区开放平台</div>
      </div>
      <div class="sider-view">
        <Menus :shrink="!sider_full"></Menus>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Menus from '../components/Menus.vue'
import { sider_full } from './com-data'
</script>
<style scoped>
.sider {
  position: relative;
  z-index: 20;
  width: 280px;
  transition: inherit;
}
.sider-content {
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-sider);
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
.sider-view {
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: overlay;
  transition: inherit;
}
.sider-min {
  width: 72px;
}
.sider-min .logo-text {
  opacity: 0;
  left: -36px;
}
</style>
