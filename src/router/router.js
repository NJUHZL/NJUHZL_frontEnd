import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/user",
      component: () => import("@/layout/defaultLayout"),
      children: [
        {
          name: "register",
          path: "register",
          meta: { requireAuth: true },
          component: () => import("@/views/Register")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/layout/defaultLayout"),
      children: [
        {
          name: "home",
          path: "",
          meta: { requireAuth: true },
          component: () => import("@/views/Home.vue")
        },
        {
          name: "news",
          path: "/news",
          meta: { requireAuth: true },
          component: () => import("@/views/News/index.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      meta: { requireAuth: false },
      component: () => import("@/views/login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      meta: { requireAuth: false },
      component: () => import("@/views/signup.vue")
    }
  ]
});
