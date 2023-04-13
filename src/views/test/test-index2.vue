<template>
  <div style="height: 100%; padding: 20px; box-sizing: border-box">
    <div style="background-color: #0097ff; display: flex; align-items: center; justify-content: center; height: 100%">test-index2</div>
    <div>{{ time }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const time = ref(new Date().getTime())
console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:`)
</script>
