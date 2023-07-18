<template>
  <ContentTable>
    <div class="content">
      <div class="content-row">time：{{ time }}</div>
      <div class="content-row">
        <el-button @click="change"> 改变time</el-button>
      </div>
      <div class="content-row">
        <el-button @click="toDetails"> 查看详情query</el-button>
      </div>
      <div class="content-row">
        <el-button @click="toDetailsOfParams"> 查看详情params</el-button>
      </div>
      <div class="content-row"></div>
    </div>
  </ContentTable>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const time = ref(0)
const change = () => {
  time.value = new Date().getTime()
}

const toDetails = () => {
  router.push({ path: `/test/test-details`, query: { time: time.value, name: 'breathe' } })
}
const toDetailsOfParams = () => {
  router.push({ name: `test-details`, params: { time: '2022-08-12' } })
}
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
