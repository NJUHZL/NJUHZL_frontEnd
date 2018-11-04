import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { test } from "@/api/testService";

const state = {
  tags: []
};

const actions = {
  async [ACTIONS.TEST](context) {
    const data = await test();
    context.commit(MUTATIONS.TEST, data);
  }
};

const mutations = {
  [MUTATIONS.TEST](state, data) {
    state.tags = data;
  }
};

export default {
  state,
  actions,
  mutations
};
