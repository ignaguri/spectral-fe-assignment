import { getAssets, getMeasurements } from "../api";
import {
  SET_SELECTED_ASSET,
  FETCH_ASSETS,
  SET_ASSETS,
  FETCH_MEASUREMENTS,
  SET_MEASUREMENTS,
} from "./constants";

export default {
  [SET_SELECTED_ASSET]({ commit }, payload) {
    commit(SET_SELECTED_ASSET, payload);
  },
  async [FETCH_ASSETS]({ commit }) {
    const assets = await getAssets();
    commit(SET_ASSETS, assets);
  },
  async [FETCH_MEASUREMENTS]({ commit }) {
    const measurements = await getMeasurements();
    commit(SET_MEASUREMENTS, measurements);
  },
};
