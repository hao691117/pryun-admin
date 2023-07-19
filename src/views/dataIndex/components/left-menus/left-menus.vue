<template>
  <div class="left-menus">
    <div class="search">
      <el-input v-model="inf.key" placeholder="输入项目名称" clearable :suffix-icon="Search" />
    </div>
    <div class="title">
      <div class="title-text">我的项目</div>
      <div style="flex: 1; width: 0"></div>
      <div class="icon-btn">
        <el-tooltip content="创建一个新的项目" placement="top" effect="light">
          <el-icon :size="20" @click="addProject"><Plus /></el-icon>
        </el-tooltip>
      </div>
    </div>
    <div class="list">
      <div class="list-item" :class="[{ 'list-item-active': activeIndex === item.id }]" v-for="(item, index) in list" @click="select(item)">
        <div class="list-item-name">{{ item.name }}</div>
        <div class="icon-btn">
          <el-dropdown trigger="click">
            <el-icon :size="16"><MoreFilled /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="EditPen">编辑</el-dropdown-item>
                <el-dropdown-item :icon="Edit" @click="resetName(item)">重命名</el-dropdown-item>
                <el-dropdown-item :icon="Delete"> 删除 </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <el-dialog width="30%" v-model="dialogFormVisible" :title="dialog_title">
      <el-form :model="form">
        <el-form-item label="项目名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入项目名称" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Edit, EditPen, Delete, CopyDocument, Share, Plus } from '@element-plus/icons-vue'
const router = useRouter()
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  name: '',
})
const dialog_title = ref("")
const inf = ref({
  key: '',
})

const def_list = ref([
  { id: 1, name: '【官方示例】阿勒泰地区旅游数据' },
  { id: 2, name: '【官方示例】2021年全国GDP数据' },
  { id: 3, name: '【官方示例】某节目相关数据分析' },
])

const list = ref([
  { id: 11, name: '电商公司年度销售大屏' },
  { id: 12, name: '短视频用户数据分析报告' },
  { id: 13, name: '航空公司运行监测看板' },
  { id: 14, name: '人力资源管理综合分析' },
  { id: 15, name: '云服务平台数据大屏' },
  { id: 15, name: '无线网管理中心' },
  { id: 15, name: '某运动品牌销售看板' },
  { id: 15, name: '某运动品牌销售看板某运动品牌销售看板' },
])

const activeIndex = ref(1)

const select = (item: any) => {
  activeIndex.value = item.id
}
const addProject = () => {
  dialog_title.value = '创建项目'
  dialogFormVisible.value = true
}
const resetName = (e: any) => {
  dialog_title.value = '重命名项目'
  form.name = e.name
  dialogFormVisible.value = true
}
const confirm = () => {
  router.push('/dataIndex/dataIndex-index-info')
}
</script>
<style lang="scss" scoped>
.left-menus {
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  height: calc(100vh - 68px);
  display: flex;
  flex-direction: column;
  .title {
    box-sizing: border-box;
    font-size: 18px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .search {
    height: 40px;
    display: flex;
    align-items: center;
  }
  .list {
    margin-top: 10px;
    width: 100%;
    .list-item {
      padding: 0 16px;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      border-radius: 6px;
      cursor: pointer;
      transition: all 230ms ease-out;

      .list-item-name {
        width: 0;
        flex: 1;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
      &:hover {
        background-color: rgba(128, 128, 128, 0.3);
      }
    }
    .list-item + .list-item {
      margin-top: 10px;
    }

    .list-item-active {
      background-color: #0097ff;
      &:hover {
        background-color: #0097ff;
      }
    }
  }
  .icon-btn {
    margin-left: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 230ms ease-out;
  }
  .icon-btn:hover {
    filter: drop-shadow(0 0 0.2em #ffffff);
  }
}
</style>
