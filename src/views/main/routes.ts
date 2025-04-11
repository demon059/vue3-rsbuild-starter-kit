export default [
  {
    name: 'MainPage',
    path: '/',
    meta: {
      title: 'Главная страница',
    },
    component: async () => import('./pages/main-page.vue'),
  },
]
