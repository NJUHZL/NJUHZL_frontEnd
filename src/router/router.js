import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  //base: "/NJUHZL_frontEnd",
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
        },
        {
          name: "article",
          path: "/article",
          meta: { requireAuth: true },
          component: () => import("@/views/Article/index.vue")
        },
        {
          name: "courses",
          path: "/courses",
          meta: { requireAuth: true },
          component: () => import("@/views/Courses/index.vue")
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
    },
    {
      path: "/secret/hidden/backdoor/publishPassage",
      name: "publishPassage",
      meta: { requireAuth: false },
      component: () => import("@/views/publishPassage.vue")
    },
    {
      path: "/secret/hidden/backdoor/passageAdmin",
      name: "passageAdmin",
      meta: { requireAuth: false },
      component: () => import("@/views/passageAdmin.vue")
    }
  ]
});
