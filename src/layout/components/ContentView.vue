<template>
  <div class="content-view">
    <!-- 使用动态过渡名称 -->
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" :key="$route.fullPath + refreshKey" />
      </transition>
    </router-view>
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
  box-sizing: border-box;
  position: relative;
  flex: 1;
}
</style>
