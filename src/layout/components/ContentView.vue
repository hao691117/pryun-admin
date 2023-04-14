<template>
  <div class="content-view">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <KeepAlive :include="KeepRoutes">
          <component :is="Component" :key="$route.fullPath + refreshKey" />
        </KeepAlive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { StoreSystem } from '@/store/system'
const storeSystem = StoreSystem()

const transitionName = ref('fade')

const refreshKey = computed(() => storeSystem.refreshKey)
const keepRoutes = computed(() => storeSystem.keepRoutes)

const KeepRoutes = computed(() => {
  let arr: any = Array.from(keepRoutes.value, (item) => item.name)
  return arr
})
</script>
<style scoped>
.content-view {
  position: relative;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  /* transition: all 230ms ease-out; */
  transition: all 500ms cubic-bezier(0.55, 0, 0.1, 1);
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
