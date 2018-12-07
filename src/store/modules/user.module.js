import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { registerIdentify, login } from "@/api/userService";
import { setToken, getToken } from "@/util/token";

//State
const state = {
  userProfile: {},
  identifyCodeHasSend: false,
  registerResult: 0,
  isAuthenticated: !!getToken(),
  isLoginError: false
};

//Action
const actions = {
  async [ACTIONS.REGISTER_IDENTIFY](context, userEmail) {
    const identifyResult = await registerIdentify(userEmail);
    context.commit(MUTATIONS.REGISTER_IDENTIFY, identifyResult.success);
  },
  async [ACTIONS.LOGIN](context, info) {
    const { code, token } = await login(info);
    if (code === 1) {
      //登录成功
      setToken(token);
      context.commit(MUTATIONS.SET_LOGIN_ERROR, false);
      context.commit(MUTATIONS.SET_AUTH, true);
    } else {
      //登录失败
      context.commit(MUTATIONS.SET_LOGIN_ERROR, true);
      context.commit(MUTATIONS.SET_AUTH, false);
    }
  }
};

//Mutation
const mutations = {
  [MUTATIONS.REGISTER_IDENTIFY](state, result) {
    state.identifyCodeHasSend = result;
  },
  [MUTATIONS.SET_AUTH](state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  [MUTATIONS.SET_LOGIN_ERROR](state, isError) {
    state.isLoginError = isError;
  }
};

export default {
  state,
  actions,
  mutations
};
