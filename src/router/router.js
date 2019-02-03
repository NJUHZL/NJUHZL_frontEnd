import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
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
          path: "",
          redirect: "/home"
        },
        {
          name: "news",
          path: "/news",
          meta: { requireAuth: true },
          component: () => import("@/views/News/index.vue")
        },
        {
          name: "passageDetail",
          path: "/passageDetail",
          meta: { requireAuth: true },
          component: () => import("@/views/PassageDetail.vue")
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
      path: "/home",
      name: "home",
      meta: { requireAuth: true },
      component: () => import("@/views/Home.vue")
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
      path: "/backstage/publishPassage",
      name: "publishPassage",
      meta: { requireAuth: false },
      component: () => import("@/views/publishPassage.vue")
    },
    {
      path: "/backstage/passageAdmin",
      name: "passageAdmin",
      meta: { requireAuth: false },
      component: () => import("@/views/passageAdmin.vue")
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   //localStorage.njuhzl_root = "ok"
//   // if (
//   //   to.path.indexOf("/backstage/") > -1 &&
//   //   localStorage.njuhzl_root !== "ok"
//   // ) {
//   //   next({ name: "login" });
//   //   console.log("here");
//   // }
//   // next();
// });

export default router;
