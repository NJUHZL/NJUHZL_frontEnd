import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.module";
import passage from "./modules/passage.module";
import rightNavi from "./modules/passage.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    passage,
    rightNavi
  }
});
