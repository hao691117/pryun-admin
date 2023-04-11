<template>
  <div class="content-view">
    <!-- 使用动态过渡名称 -->
    <!-- <router-view v-slot="{ Component, route }">
      <transition>
        <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" :key="$route.fullPath + refreshKey" />
      </transition>
    </router-view> -->
    <router-view> </router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue'
// 刷新
const refreshKey = ref(0)
const refresh = async () => {
  await nextTick()
  refreshKey.value = new Date().getTime()
  // console.log(`---------->日志输出: refreshKey.value`, refreshKey.value)
}
</script>
<style scoped>
.content-view {
  position: relative;
  box-sizing: border-box;
  position: relative;
  flex: 1;
}
.fade-enter-active,
.fade-leave-active {
  /* position: absolute; */
  left: 0;
  top: 0;
  width: 100%;
  transform: translateX(0);
  transition: all 5000ms ease-out;
}

.fade-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
