<!--
 * @Description: 
 * @Author: huangyh
 * @Date: 2023-07-18 17:29:25
 * @LastEditTime: 2023-07-19 17:14:19
 * @LastEditors: huangyh
-->
<template>
  <div class="info-content">
    <el-page-header :icon="ArrowLeft" style="margin-bottom: 20px">
      <template #content>
        <span class="text-large font-600 mr-3"> Title </span>
      </template>
    </el-page-header>
    <el-form class="info-form" :model="_info" label-position="top">
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input v-model="_info.name" autocomplete="off" placeholder="请输入项目名称" />
      </el-form-item>
      <el-form-item label="选择数据源" :label-width="formLabelWidth">
        <el-select v-model="_info.value1" class="m-2" placeholder="请选择数据源">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
    <div class="info-table">
      <el-table :data="tableData" style="width: 50%" v-if="_info.value1">
        <el-table-column v-for="item in columns" :prop="item.prop" :label="item.label" />
        <!-- <el-table-column prop="name" label="名称" /> -->
      </el-table>
      <el-table :data="key_value_lists" style="width: 30%" v-if="_info.value1">
        <el-table-column prop="name" label="字段" />
        <el-table-column prop="name" label="示例值" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
const props = defineProps({
  info: {
    type: Object as PropType<any>,
    default: {
      name: '',
      value1: '',
    },
  },
})
const _info = ref(props.info)
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const formLabelWidth = '140px'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
  },
])
const columns = ref([{
    prop: 'date',
    label: '时间'
},{
    prop: 'name',
    label: '名称'
}])
const key_value_lists = ref<any>([])
const getLists = () => {
    key_value_lists.value = columns.value.map((item :any, index: number) =>{
       return {
        name: item.label,
        value: getValue(item.prop)
       }
   })
}
const getValue = (e :string) => {
    const lists = tableData.value[0]
    console.log(Object.keys(lists));
    
    // if(e === lists.)
}
getLists()
</script>
<style lang="scss" scoped>
.info-content {
  padding: 10px 20px;
  box-sizing: border-box;
  .info-form {
    width: 30%;
    margin: 0 auto;
    :deep(.el-select) {
      width: 100%;
    }
  }
  .info-table {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 20px 60px;
    box-sizing: border-box;
  }
}
</style>
