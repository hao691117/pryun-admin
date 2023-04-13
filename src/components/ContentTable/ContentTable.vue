<template>
  <div class="card">
    <div class="card-content">
      <div class="card-menu">
        <slot name="menu"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  .card-content {
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 20px 20px rgba(173, 173, 173, 0.1);
  }
}
</style>
