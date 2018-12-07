import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import "./plugin/element.js";
import axios from "axios";
import { getToken } from "./util/token";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  //权限检查，没有登录跳转登录界面
  if (to.meta.requireAuth && !getToken()) {
    next({ name: "login" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
