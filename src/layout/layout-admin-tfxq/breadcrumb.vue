<script lang="ts" setup>
import { ElDropdown } from 'element-plus'
</script>
<template>
  <div class="breadcrumb">
    <div class="menu-btn" @click="storeSystem.setSiderRetract(!siderRetract)">
      <div class="menu-icon icon-list" :class="[{ 'icon-list-active': siderRetract }]"></div>
    </div>
    <div class="breadcrumb-content">
      <TransitionGroup name="breadcrumbTransition">
        <div v-for="(item, index) in Breadcrumb" :key="item.path" class="breadcrumb-item">
          <div v-if="index !== 0" class="breadcrumb-item-span">/</div>
          <el-dropdown trigger="click">
            <div class="breadcrumb-item-text" :class="[{ 'breadcrumb-item-text-hover': Children(item).length }]">{{ item.meta?.title }}</div>
            <template v-if="Children(item).length" #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(item2, index2) in Children(item)" :disabled="item2.path === $route.path" @click="select(item2.path)">{{ item2.meta?.title }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
}
.menu-btn {
  padding: 8px 16px;
  min-width: 40px;
  min-height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: all 230ms ease-out;
  cursor: pointer;
}
.menu-btn:hover {
  background-color: var(--color-pr-action-sheet-active);
}
.menu-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.breadcrumb-content {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.breadcrumb-item {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  color: #000000;
}
.breadcrumb-item-span {
  padding: 0 8px;
  line-height: 1;
}
.breadcrumb-item-text {
  white-space: nowrap;
}

.breadcrumb-item-text-hover {
  opacity: 1;
  transition: all 230ms ease-out;
  cursor: pointer;
}

/* 对移动中的元素应用的过渡 */
.breadcrumbTransition-move,
.breadcrumbTransition-enter-active,
.breadcrumbTransition-leave-active {
  transition: all 500ms ease-out;
}

.breadcrumbTransition-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.breadcrumbTransition-leave-to {
  opacity: 0;
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.breadcrumbTransition-leave-active {
  position: absolute;
}
</style>
