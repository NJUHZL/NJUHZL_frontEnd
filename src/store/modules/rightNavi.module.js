import * as ACTIONS from "@/store/type/actions";
import * as MUTATIONS from "@/store/type/mutations";
import { fetchHotPassage } from "@/api/passageService";

//State
const state = {
    hotPassage: []
};

//Action
const actions = {
    //获得热点走马灯文章
    async [ACTIONS.FETCH_HOT_PASSAGE](context) {
        const result = await fetchHotPassage();
        context.commit(MUTATIONS.SET_HOT_PASSAGE, result.data);
    }
};

//Mutation
const mutations = {
    //设置热点走马灯文章
    [MUTATIONS.SET_HOT_PASSAGE](state, result) {
        state.hotPassage = result;
    }
};

export default {
    state,
    actions,
    mutations
};
