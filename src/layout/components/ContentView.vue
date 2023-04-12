<template>
  <div class="content-view">
    <!-- 使用动态过渡名称 -->
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <div class="content-view-body" :key="refreshKey">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const transitionName = ref('fade')
// 刷新
const refreshKey = ref(0)
const refresh = async () => {
  await nextTick()
  refreshKey.value = new Date().getTime()
}
watch(
  () => route.path,
  (a) => {
    window.scrollTo({ top: 0 }) // 需要把滚动条滑到最上方 不然过渡动画有问题 参考element-admin
    refreshKey.value = new Date().getTime()
  }
)
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
