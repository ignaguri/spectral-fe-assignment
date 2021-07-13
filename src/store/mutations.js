import { SET_ASSETS, SET_SELECTED_ASSET, SET_MEASUREMENTS } from "./constants";

export default {
  [SET_SELECTED_ASSET](state, payload) {
    state.selectedAsset = payload;
  },
  [SET_ASSETS](state, payload) {
    state.assets = payload;
  },
  [SET_MEASUREMENTS](state, payload) {
    state.measurements = payload;
  },
};
