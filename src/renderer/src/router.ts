import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/Test',
    component: () => import('./components/Versions.vue'),
  }
];
 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router