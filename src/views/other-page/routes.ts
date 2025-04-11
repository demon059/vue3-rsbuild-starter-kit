export default [
  {
    name: 'OtherPage',
    path: '/about',
    meta: {
      title: 'Другая страница',
    },
    component: async () => import('./pages/other-page.vue'),
  },
]
