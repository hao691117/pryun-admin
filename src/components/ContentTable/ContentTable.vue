<template>
  <div class="card">
    <div class="card-content">
      <div v-if="title" class="back">
        <el-page-header @back="goBack">
          <template #content>
            <span class="text-large font-600 mr-3"> {{ title || '详情' }} </span>
          </template>
        </el-page-header>
      </div>
      <div class="card-menu">
        <slot name="menu"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: {
    type: [String],
    default: '',
  },
})

const goBack = () => {
  router.go(-1)
}
</script>
<style lang="scss" scoped>
.card {
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .card-content {
    height: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 20px 20px rgba(173, 173, 173, 0.1);
    .back {
      padding: 0 20px;
      height: 60px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
