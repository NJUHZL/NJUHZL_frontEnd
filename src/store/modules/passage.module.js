import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import {
  fetchHotPassage,
  fetchOneClassOfPassageList,
  publishPassage
} from "@/api/passageService";

//State
const state = {
  hotPassage: [],
  oneClassOfPassageList: [],
  currentClass: "sshc",
  publishResult: false
};

//Action
const actions = {
  //获得热点走马灯文章
  async [ACTIONS.FETCH_HOT_PASSAGE](context) {
    const result = await fetchHotPassage();
    context.commit(MUTATIONS.SET_HOT_PASSAGE, result);
  },

  //获得某一类型的文档列表
  async [ACTIONS.FETCH_ONE_CLASS_OF_PASSAGE_LIST](context, className) {
    const result = await fetchOneClassOfPassageList(className);
    console.log("CLASS_NAME:", className);
    console.log(result);
    context.commit(MUTATIONS.SET_ONE_CLASS_OF_PASSAGE_LIST, result);
  },

  async [ACTIONS.SET_CURRENT_CLASS](context, className) {
    context.commit(MUTATIONS.SET_CURRENT_CLASS, className);
  },

  async [ACTIONS.PUBLISH_PASSAGE](context, info) {
    const result = await publishPassage(info);
    context.commit(MUTATIONS.PUBLISH_PASSAGE, result);
  }
};

//Mutation
const mutations = {
  //设置热点走马灯文章
  [MUTATIONS.SET_HOT_PASSAGE](state, result) {
    state.hotPassage = result;
  },
  //设置某一类型的文档列表
  [MUTATIONS.SET_ONE_CLASS_OF_PASSAGE_LIST](state, result) {
    state.oneClassOfPassageList = result;
  },
  //设置某一类型的文章
  [MUTATIONS.SET_CURRENT_CLASS](state, className) {
    state.currentClass = className;
  },
  [MUTATIONS.PUBLISH_PASSAGE](state, result) {
    state.publishResult = result;
  }
};

export default {
  state,
  actions,
  mutations
};
