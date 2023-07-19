<!--
 * @Description: 
 * @Author: huangyh
 * @Date: 2023-07-18 15:49:47
 * @LastEditTime: 2023-07-19 10:03:10
 * @LastEditors: huangyh
-->
<template>
  <div class="reportAnalysis">
    <div class="left">
      <leftMenus></leftMenus>
    </div>
    <div class="right">
      <div class="right-search">
        <div class="item">
          <el-input v-model="_data.name" placeholder="请输入模版名称" @keyup.enter="getList" />
        </div>
      </div>
      <rightContent></rightContent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import leftMenus from './components/left-menus/left-menus.vue'
import rightContent from './components/right-content/right-content.vue'
const _data = ref({
  name:""
})
const getList = () => {
  console.log("🚀 ~ file: dataIndex-index.vue:30 ~ getList ~ _data.value.name:", _data.value.name)
}
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
    .right-search {
      width: 100%;
      padding: 20px;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: end;
      border-bottom: 1px solid #58585B;
      box-sizing: border-box;
      .item {
        width: 20%;
      }
    }
  }
}
</style>
