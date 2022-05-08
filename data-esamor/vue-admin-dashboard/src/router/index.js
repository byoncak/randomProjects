import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import LoginView from "@/views/LoginFlow/Login.vue";
import RequestView from "@/views/LoginFlow/Request.vue";
import RecoverView from "@/views/LoginFlow/Recover.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/request",
    name: "request",
    component: RequestView,
  },

  {
    path: "/recover",
    name: "recover",
    component: RecoverView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
