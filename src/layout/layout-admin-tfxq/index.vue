<template>
  <div class="layout-admin">
    <div class="layout-navbar">
      <Navbar></Navbar>
    </div>
    <div class="body">
      <div class="layout-sider">
        <Sider></Sider>
      </div>
      <div class="layout-content">
        <Breadcrumb></Breadcrumb>
        <slot></slot>
        <Footer></Footer>
      </div>
    </div>
    <!-- <div class="safe-area-inset-bottom" style="background-color: red"></div> -->
  </div>
</template>
<script setup lang="ts">
import Navbar from './navbar.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import Breadcrumb from './breadcrumb.vue'
</script>

<style scoped>
.layout-admin {
  box-sizing: border-box;
  color: var(--color-text);
  background-color: var(--color-bg);
}

.body {
  display: flex;
  align-items: stretch;
}
.layout-navbar {
  position: sticky;
  top: 0;
  z-index: 9;
}

.layout-sider {
  position: fixed;
  left: 0;
  top: 68px;
  z-index: 8;
}
.layout-content {
  width: 0;
  flex: 1;
  transition: all 230ms ease-out;
}
</style>
