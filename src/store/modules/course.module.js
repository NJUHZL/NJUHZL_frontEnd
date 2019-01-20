import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { fetchOneClassOfCourseList } from "@/api/courseService";

const state = {
  oneClassOfCourseList: [],
  currentClass: "种类1"
};

//Action
const actions = {
  //获得某一类型的课程列表
  async [ACTIONS.FETCH_ONE_CLASS_OF_COURSE_LIST](context, className) {
    const result = await fetchOneClassOfCourseList(className);
    console.log("CLASS_NAME:", className);
    context.commit(MUTATIONS.SET_ONE_CLASS_OF_COURSE_LIST, result);
  },

  async [ACTIONS.SET_CURRENT_CLASS_OF_COURSE](context, className) {
    context.commit(MUTATIONS.SET_CURRENT_CLASS_OF_COURSE, className);
  }
};

//Mutation
const mutations = {
  //设置某一类型的课程列表
  [MUTATIONS.SET_ONE_CLASS_OF_COURSE_LIST](state, result) {
    state.oneClassOfCourseList = result;
  },
  //设置某一类型的课程
  [MUTATIONS.SET_CURRENT_CLASS_OF_COURSE](state, className) {
    state.currentClass = className;
  }
};

export default {
  state,
  actions,
  mutations
};
