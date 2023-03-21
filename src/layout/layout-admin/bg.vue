<template>
  <div class="bg">
    <div class="bg-img"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url('@/assets/bg.svg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
