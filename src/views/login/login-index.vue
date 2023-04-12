<template>
  <div class="login">
    <div class="login-content">
      <div class="left">
        <!-- <img class="left-img" src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/09/0E/ChMkJ13Lc6uIGCPDAAF0o4kIEFcAAvNEgGM66oAAXS7641.jpg" alt="" /> -->
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-content {
    width: calc(100% - 40px);
    max-width: 1600px;
    height: calc(100% - 40px);
    max-height: 720px;
    display: flex;
    align-items: stretch;
    // background-color: var(--color-bg);
    // border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 40px 10px rgba(64, 64, 64, 0.1);
    .left {
      position: relative;
      width: 0;
      flex: 1;
      .left-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      flex-shrink: 0;
      min-width: 600px;
      background-color: var(--color-sider);
    }
  }
}
</style>
