import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: "/StaticInfo/Overview",
    component: import("./components/Views/Overview.vue")
  },
  {
    path: "/StaticInfo/Header",
    component: import("./components/Views/Header.vue")
  },
  {
    path: "/Tool/Calc",
    component: import("./components/Views/Calc.vue")
  },
];
 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router