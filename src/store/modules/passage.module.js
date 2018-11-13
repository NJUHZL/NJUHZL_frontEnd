import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";

//State
const state = {
  hotPassage: []
};

//Action
const actions = {
  //获得热点走马灯文章
  [ACTIONS.FETCH_HOT_PASSAGE](context) {}
};

//Mutation
const mutations = {
  [MUTATIONS.FETCH_HOT_PASSAGE](state, result) {
    state.hotPassage = result;
  }
};

export default {
  state,
  actions,
  mutations
};
