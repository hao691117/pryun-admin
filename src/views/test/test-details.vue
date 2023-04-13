<template>
  <ContentTable title="详情">
    <div class="content">
      <div class="content-row">query {{ query }}</div>
      <div class="content-row">params {{ params }}</div>
    </div>
  </ContentTable>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const { query, params } = useRoute()
console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:params`, params)
</script>
<style lang="scss" scoped>
.content {
  padding: 0 20px;
  .content-row {
    height: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
