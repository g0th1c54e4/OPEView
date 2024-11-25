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
    path: "/StaticInfo/DataDirectory",
    component: () => import("./components/Views/DataDirs.vue")
  },
  {
    path: "/StaticInfo/Section",
    component: () => import("./components/Views/Sections.vue")
  },
  {
    path: "/StaticInfo/Import",
    component: () => import("./components/Views/Import.vue")
  },
  {
    path: "/StaticInfo/Export",
    component: () => import("./components/Views/Exports.vue")
  },
  {
    path: "/StaticInfo/Resource",
    component: () => import("./components/Views/Resource.vue")
  },
  {
    path: "/StaticInfo/Reloc",
    component: () => import("./components/Views/Reloc.vue")
  },
  {
    path: "/StaticInfo/Exception",
    component: () => import("./components/Views/Exception.vue")
  },
  {
    path: "/StaticInfo/DataDirectory",
    component: () => import("./components/Views/DataDirs.vue")
  },
  {
    path: "/StaticInfo/Security",
    component: () => import("./components/Views/Security.vue")
  },
  {
    path: "/StaticInfo/NETMeta",
    component: () => import("./components/Views/NETMeta.vue")
  },
  {
    path: "/StaticInfo/Debug",
    component: () => import("./components/Views/Debug.vue")
  },
  {
    path: "/StaticInfo/TLS",
    component: () => import("./components/Views/TLS.vue")
  },
  {
    path: "/StaticInfo/LoadConfig",
    component: () => import("./components/Views/LoadConfig.vue")
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