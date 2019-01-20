import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { fetchLatestPassage } from "@/api/homeService";
import { fetchLatestComments } from "@/api/homeService";

//State
const state = {
  latestPassage: [],
  latestComments: []
};

//Action
const actions = {
  //获得热点走马灯文章
  async [ACTIONS.FETCH_LATEST_PASSAGE](context) {
    const result = await fetchLatestPassage();
    context.commit(MUTATIONS.SET_LATEST_PASSAGE, result.data);
  },
  async [ACTIONS.FETCH_LATEST_COMMENTS](context) {
    const result = await fetchLatestComments();
    context.commit(MUTATIONS.SET_LATEST_COMMENTS, result);
  }
};

//Mutation
const mutations = {
  //设置热点走马灯文章
  [MUTATIONS.SET_LATEST_PASSAGE](state, result) {
    state.latestPassage = result;
  },
  [MUTATIONS.SET_LATEST_COMMENTS](state, result) {
    state.latestComments = result;
  }
};

export default {
  state,
  actions,
  mutations
};
