import { createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { ASSETS, SELECTED_ASSET, MEASUREMENTS } from "./constants";

export default createStore({
  state: {
    [ASSETS]: [],
    [SELECTED_ASSET]: null,
    [MEASUREMENTS]: [],
  },
  mutations,
  actions,
  getters,
});
