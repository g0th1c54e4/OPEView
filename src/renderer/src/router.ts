import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("./components/Views/RootPage.vue")
  },
  {
    path: "/StaticInfo/Overview",
    component: () => import("./components/Views/Overview.vue")
  },
  {
    path: "/StaticInfo/Header",
    component: () => import("./components/Views/Header.vue")
  },
  {
    path: "/Tool/Calc",
    component: () => import("./components/Views/Calc.vue")
  },
  {
    path: "/Analysis/Functions",
    component: () => import("./components/Views/Functions.vue")
  },
];
 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router