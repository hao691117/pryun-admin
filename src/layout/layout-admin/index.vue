<template>
  <div class="layout-admin">
    <Sider></Sider>
    <div class="body">
      <Navbar></Navbar>
      <div class="body-view">
        <slot></slot>
      </div>
      <Footer></Footer>
    </div>
    <!-- <div class="safe-area-inset-bottom" style="background-color: red"></div> -->
  </div>
</template>
<script setup lang="ts">
import Navbar from './navbar.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
</script>

<style scoped>
.layout-admin {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  transition: all 230ms ease-out;
  color: var(--color-text);
  background-color: var(--color-bg);
}

.body {
  width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.body-view {
  position: relative;
  height: fit-content;
  min-height: calc(100vh - 180px);
  z-index: 0;
}
</style>
