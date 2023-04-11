<template>
  <div class="layout-admin">
    <Sider></Sider>
    <div class="content">
      <Navbar></Navbar>
      <slot></slot>
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

.content {
  width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
