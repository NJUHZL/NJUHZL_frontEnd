import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.module";
import passage from "./modules/passage.module";
import rightNavi from "./modules/passage.module";
import course from "./modules/course.module";
import rightNaviOfCourses from "./modules/course.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    passage,
    rightNavi,
    course,
    rightNaviOfCourses
  }
});
