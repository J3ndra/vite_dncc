import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/binding",
      name: "binding",
      component: () => import("../views/BindingView.vue"),
    },
    {
      path: "/parent-child",
      name: "parent-child",
      component: () => import("../views/ParentView.vue"),
    },
    {
      path: "/computed",
      name: "computed",
      component: () => import("../views/ComputedView.vue"),
    },
  ],
});

export default router;
