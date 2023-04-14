<template>
  <div class="login">
    <img class="login-bg" src="./static/bg.jpg" alt="" />
    <div class="login-content" @click="login">
      <div class="left">
        <!-- <img class="left-img" src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/09/0E/ChMkJ13Lc6uIGCPDAAF0o4kIEFcAAvNEgGM66oAAXS7641.jpg" alt="" /> -->
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { StoreSystem } from '@/store/system'

const router = useRouter()

const storeSystem = StoreSystem()

const login = () => {
  storeSystem.init() // 初始化系统store数据
  router.push('/')
}
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-bg {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
