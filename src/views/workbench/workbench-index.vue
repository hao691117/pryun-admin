<template>
  <div style="padding: 20px; box-sizing: border-box">
    <div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center; color: red" @click="aaa">workbench-index</div>
      <svg class="pr-icon" aria-hidden="true" style="font-size: 40px">
        <use :xlink:href="`#pr-icon-${icon}`"></use>
      </svg>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
      <div style="height: 200px; display: flex; align-items: center; justify-content: center">workbench-index</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const icon = ref('calendar')
const aaa = () => {
  icon.value = icon.value === 'calendar' ? 'badge' : 'calendar'
}
</script>
<style scoped></style>
