import { ref } from 'vue'
export const sider_retract = ref(false) // 收回侧边栏
export const change_sider_retract = () => {
  sider_retract.value = !sider_retract.value
}
