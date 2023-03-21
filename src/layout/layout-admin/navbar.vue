<template>
  <div class="backdrop-filter navbar">navbar</div>
</template>
<script setup lang="ts"></script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  height: 72px;
  flex-shrink: 0;
  box-sizing: border-box;
  z-index: 9;
  border-radius: inherit inherit 0 0;
  transition: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(242, 241, 246, 0.5); */
  background-color: #ffffff;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
</style>
