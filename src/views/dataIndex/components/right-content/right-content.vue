<!--
 * @Description: 
 * @Author: huangyh
 * @Date: 2023-07-18 17:29:25
 * @LastEditTime: 2023-07-19 11:14:33
 * @LastEditors: huangyh
-->
<template>
  <div class="right-content">
    <div class="item" v-for="item in props.info_lists" :key="item.name">
      <div class="item-img">
        <img src="../../../../assets/bg.svg" />
      </div>
      <div class="item-label">
        {{ item.name }}
      </div>
      <div class="item-btn">
        <el-button size="small" type="default" plain>预览</el-button>
        <el-button size="small" type="primary">应用</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, PropType } from 'vue'
const props = defineProps({
  info_lists: {
    type: Array as PropType<any>,
    default: [
      {
        name: '沙哈',
      },
      {
        name: '数据撒',
      },
      {
        name: '复旦复华',
      },{
        name: '沙哈32',
      },
      {
        name: '数据撒都是',
      },
      {
        name: '复旦复华阿是',
      },{
        name: '沙哈',
      },
      {
        name: '数据撒',
      },
      {
        name: '复旦复华',
      },{
        name: '沙哈32',
      },
      {
        name: '数据撒都是',
      },
      {
        name: '复旦复华阿是',
      },{
        name: '沙哈',
      },
      {
        name: '数据撒',
      },
      {
        name: '复旦复华',
      },{
        name: '沙哈32',
      },
      {
        name: '数据撒都是',
      },
      {
        name: '复旦复华阿是',
      },
    ],
  },
})
const _data = ref({
  name: '',
})
</script>
<style lang="scss" scoped>
.right-content {
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;
  height: calc(100% - 80px);
  overflow-y: scroll;
  .item {
    width: calc(20% - 16px);
    height: 250px;
    padding: 5px;
    box-sizing: border-box;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.72);
    border: 1px solid #58585b;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    margin: 0 20px 20px 0;
    &:nth-child(5n) {
        margin:  0 0 20px 0;;
    }
    &:hover {
      .item-img {
        img {
          transform: scale(1.07);
        }
      }
      .item-btn {
        opacity: 1;
      }
    }
    .item-img {
      width: 100%;
      height: 70%;
      overflow: hidden;
      img {
        transition: all 0.2s ease-in;
        width: 100%;
        height: 100%;
      }
    }
    .item-label {
      font-size: 20px;
      color: #fff;
      margin-top: 10px;
    }
    .item-btn {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      opacity: 0;
      transition: all 0.2s ease-in;
      :deep(.el-button) {
        width: 50%;
      }
    }
  }
}
</style>
