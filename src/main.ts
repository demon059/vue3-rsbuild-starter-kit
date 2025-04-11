import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/init.scss'
import 'uno.css'
import { router } from './plugins'
import '@/views/init.ts'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
