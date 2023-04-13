import ContentTable from '@/components/ContentTable/ContentTable.vue'

declare module 'vue' {
  export interface GlobalComponents {
    ContentTable: typeof ContentTable
  }
}
