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
          path: "home",
          component: () => import("@/views/Home.vue")
        }
      ]
    }
  ]
});
