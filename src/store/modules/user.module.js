import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { registerIdentify } from "@/api/userService";

//State
const state = {
  userProfile: {},
  identifyCodeHasSend: false,
  registerResult: 0
};

//Action
const actions = {
  async [ACTIONS.REGISTER_IDENTIFY](context, userEmail) {
    const identifyResult = await registerIdentify(userEmail);
    context.commit(MUTATIONS.REGISTER_IDENTIFY, identifyResult.success);
  }
};

//Mutation
const mutations = {
  [MUTATIONS.REGISTER_IDENTIFY](state, result) {
    state.identifyCodeHasSend = result;
  }
};

export default {
  state,
  actions,
  mutations
};
