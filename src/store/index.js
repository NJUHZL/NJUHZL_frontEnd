import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.module";
import passage from "./modules/passage.module";
import home from "./modules/home.module";
import course from "./modules/course.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    passage,
    home,
    course
  }
});
