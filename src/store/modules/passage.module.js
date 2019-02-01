import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import {
  fetchHotPassage,
  fetchOneClassOfPassageList,
  publishPassage,
  fetchAllPassage,
  deletePassage
} from "@/api/passageService";

//State
const state = {
  hotPassage: [],
  oneClassOfPassageList: [],
  currentClass: "事实核查",
  publishResult: 0,
  allPassage: [],
  deleteResult: 0
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
    console.log("CLASS_NAME:", className);
    const result = await fetchOneClassOfPassageList(className);
    console.log(result);
    context.commit(MUTATIONS.SET_ONE_CLASS_OF_PASSAGE_LIST, result);
  },

  async [ACTIONS.SET_CURRENT_CLASS](context, className) {
    context.commit(MUTATIONS.SET_CURRENT_CLASS, className);
  },

  async [ACTIONS.PUBLISH_PASSAGE](context, info) {
    const result = await publishPassage(info);
    context.commit(MUTATIONS.PUBLISH_PASSAGE, result.code);
  },
  async [ACTIONS.FETCH_ALL_PASSAGE](context) {
    const result = await fetchAllPassage();
    context.commit(MUTATIONS.SET_ALL_PASSAGE, result);
  },
  async [ACTIONS.DELETE_PASSAGE](context, id) {
    const deleteResult = await deletePassage(id);
    context.commit(MUTATIONS.DELETE_PASSAGE, deleteResult.code);
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
  },
  [MUTATIONS.SET_ALL_PASSAGE](state, result) {
    state.allPassage = result;
  },
  [MUTATIONS.DELETE_PASSAGE](state, result) {
    state.deleteResult = result;
  }
};

export default {
  state,
  actions,
  mutations
};
