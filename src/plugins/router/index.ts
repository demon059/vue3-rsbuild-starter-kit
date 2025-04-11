import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = []

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (typeof to.meta.title === 'string')
    document.title = to.meta.title
  else
    document.title = 'Rsbuild with Vue'
})
