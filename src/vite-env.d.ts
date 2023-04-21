/// <reference types="vite/client" />
declare module '*.vue' {
  import type { defineComponent } from 'vue'
  const Component: defineComponent<{}, {}, any>
  export default Component
}
declare module '*.js'
declare interface Window {}
