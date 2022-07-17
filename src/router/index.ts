import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ControllersView from "../views/ControllersView.vue";
import ControllerDataView from "../views/ControllerDataView.vue";
import ControllerSetupView from "../views/ControllerSetupView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "/controllers",
  },
  {
    path: "/controllers",
    name: "controllers",
    component: ControllersView,
  },
  {
    path: "/controllers/:imei",
    name: "controllerData",
    component: ControllerDataView,
  },
  {
    path: "/setup",
    name: "setup",
    component: ControllerSetupView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
