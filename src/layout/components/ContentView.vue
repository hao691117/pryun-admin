<template>
  <div class="content-view">
    <!-- 使用动态过渡名称 -->
    <router-view v-slot="{ Component, route }">
      <transition :name="transitionName">
        <div class="content-view-body" :key="route.path + refreshKey">
          <KeepAlive v-if="route.meta.keepAlive !== false">
            <component :is="Component"></component>
          </KeepAlive>
          <component v-else :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { StoreSystem } from '@/store/system'
import { useRoute } from 'vue-router'
const route = useRoute()
const storeSystem = StoreSystem()

const transitionName = ref('fade')

const refreshKey = computed(() => storeSystem.refreshKey)
const keepRoutes = computed(() => storeSystem.keepRoutes)

const KeepRoutes = computed(() => {
  // let arr: any = Array.from(keepRoutes.value, (item) => item.name)
  let arr = ['test-index2']
  return arr
})
</script>
<style scoped>
.content-view {
  position: relative;
  box-sizing: border-box;
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: all 500ms ease-out;
}

.fade-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
