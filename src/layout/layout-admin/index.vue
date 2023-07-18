<template>
  <div class="layout-admin">
    <Sider></Sider>
    <div class="layout-body">
      <Navbar></Navbar>
      <div class="layout-body-view">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from './navbar.vue'
import Sider from './sider.vue'
</script>

<style scoped>
.layout-admin {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  transition: all 230ms ease-out;
  color: var(--color-text);
  background-color: var(--color-bg);
}

.layout-body {
  width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.layout-body-view {
  position: relative;
  z-index: 0;
}
</style>
