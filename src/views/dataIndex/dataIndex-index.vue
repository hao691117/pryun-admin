<template>
  <div class="reportAnalysis">
    <div class="left">
      <leftMenus></leftMenus>
    </div>
    <div class="right"></div>
  </div>
</template>
<script lang="ts" setup>
import leftMenus from './components/left-menus/left-menus.vue'
</script>
<style lang="scss" scoped>
.reportAnalysis {
  position: relative;
  height: calc(100vh - 68px);
  display: flex;
  align-items: center;
  .left {
    width: 320px;
    height: 100%;
  }
  .right {
    width: 0;
    height: 100%;
    flex: 1;
    border-left: 1px solid rgba(128, 128, 128, 0.2);
    box-sizing: border-box;
  }
}
</style>
