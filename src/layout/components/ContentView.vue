<template>
  <div class="content-view">
    <!-- 使用动态过渡名称 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition :name="transitionName">
          <div class="content-view-body" :key="refreshKey">
            <component :is="Component" />
          </div>
        </transition>
      </keep-alive>
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
