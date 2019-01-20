import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { fetchHotNews } from "@/api/homeService";
import { fetchLatestComments } from "@/api/homeService";

//State
const state = {
  hotNews: [],
  latestComments: []
};

//Action
const actions = {
  //获得热点走马灯文章
  async [ACTIONS.FETCH_HOT_NEWS](context) {
    const result = await fetchHotNews();
    context.commit(MUTATIONS.SET_HOT_NEWS, result.data);
  },
  async [ACTIONS.FETCH_LATEST_COMMENTS](context) {
    const result = await fetchLatestComments();
    context.commit(MUTATIONS.SET_LATEST_COMMENTS, result.data);
  }
};

//Mutation
const mutations = {
  //设置热点走马灯文章
  [MUTATIONS.SET_HOT_NEWS](state, result) {
    state.hotNews = result;
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
