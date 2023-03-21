<template>
  <div class="layout-admin">
    <!-- <Bg></Bg> -->
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
import Bg from './bg.vue'
</script>

<style scoped>
.layout-admin {
  box-sizing: border-box;
  width: 100%;
  color: var(--color-text, #000000);
  display: flex;
  transition: all 230ms ease-out;
  background-color: rgba(242, 241, 246, 1);
}

.content {
  width: 0;
  flex: 1;
  transition: inherit;
  color: #000000;
}
</style>
