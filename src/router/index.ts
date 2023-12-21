/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import { createRouter, createWebHistory } from 'vue-router'
import { Route, RouteName } from './routes';

import DashboardView from '@/views/DashboardView.vue'
import CalendarView from '@/views/CalendarView.vue'
import RequestsView from '@/views/RequestsView.vue';
import ProfileView from '@/views/ProfileView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: Route.DASHBOARD,
            name: RouteName.DASHBOARD,
            component: DashboardView
        },
        {
            path: Route.REQUESTS,
            name: RouteName.REQUESTS,
            component: RequestsView,
        },
        {
            path: Route.CALENDAR,
            name: RouteName.CALENDAR,
            component: CalendarView
        },
        {
            path: Route.PROFILE,
            name: RouteName.PROFILE,
            component: ProfileView,
        }
    ]
});

export default router;
