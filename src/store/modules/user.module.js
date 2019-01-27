import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { registerIdentify, login, register } from "@/api/userService";
import { setToken, getToken } from "@/util/token";

//State
const state = {
  userProfile: {},
  identifyCodeHasSend: false,
  registerResult: 0,
  isAuthenticated: !!getToken(),
  isLoginError: false,
  token: ""
};

//Action
const actions = {
  async [ACTIONS.REGISTER_IDENTIFY](context, userEmail) {
    const identifyResult = await registerIdentify(userEmail);
    context.commit(MUTATIONS.REGISTER_IDENTIFY, identifyResult.success);
    context.commit(MUTATIONS.SET_TOKEN, identifyResult.token);
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
  },
  async [ACTIONS.REGISTER](context, info) {
    const result = await register(info);
    context.commit(MUTATIONS.REGISTER, result);
  }
};

//Mutation
const mutations = {
  [MUTATIONS.REGISTER_IDENTIFY](state, result) {
    state.identifyCodeHasSend = result;
  },
  [MUTATIONS.SET_TOKEN](state, token) {
    state.token = token;
  },
  [MUTATIONS.SET_AUTH](state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  [MUTATIONS.SET_LOGIN_ERROR](state, isError) {
    state.isLoginError = isError;
  },
  [MUTATIONS.REGISTER](state, result) {
    state.registerResult = result;
  }
};

export default {
  state,
  actions,
  mutations
};
