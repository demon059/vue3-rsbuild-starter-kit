/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}
