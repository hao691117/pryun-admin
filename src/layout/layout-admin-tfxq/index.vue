<template>
  <div class="layout-admin">
    <div class="layout-navbar">
      <Navbar></Navbar>
    </div>
    <div class="layout-body">
      <slot></slot>
    </div>
    <!-- <div class="safe-area-inset-bottom" style="background-color: red"></div> -->
  </div>
</template>
<script setup lang="ts">
import Navbar from './navbar.vue'
</script>

<style scoped>
.layout-admin {
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  color: var(--color-text);
  background-color: var(--color-bg);
}

.layout-navbar {
  position: sticky;
  top: 0;
  z-index: 9;
}
.layout-body {
  position: relative;
  min-height: calc(100vh - 68px);
  height: 100%;
}
</style>
