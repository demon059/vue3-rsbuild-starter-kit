import type { RouteRecordRaw } from 'vue-router'
import routes from './routes'
import { router } from '@/plugins/router'

routes.forEach((route: RouteRecordRaw) => router.addRoute(route))
