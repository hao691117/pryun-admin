<template>
  <div class="smsCode">
    <div>发送验证码</div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [Boolean],
    required: true,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
.smsCode {
}
</style>
