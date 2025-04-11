import { router } from '@/plugins/router'
import routes from './routes'
import type { RouteRecordRaw } from 'vue-router'

routes.forEach((route: RouteRecordRaw) => router.addRoute(route))
