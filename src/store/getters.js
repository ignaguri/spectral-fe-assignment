import { findNestedObj, extractMeasurements } from "./utils";
import { ASSET_TREE, GET_MEASUREMENTS_BY_ASSET } from "./constants";

export default {
  [ASSET_TREE](state) {
    const assets = state.assets;

    const assetTree = assets.reduce((acc, curr) => {
      const parent = findNestedObj(acc, "id", curr.parentId);

      const newItem = {
        id: curr.id,
        name: curr.name,
        children: [],
      };

      if (parent) {
        parent.children.push(newItem);
      } else {
        acc.push(newItem);
      }

      return acc;
    }, []);

    return assetTree;
  },
  [GET_MEASUREMENTS_BY_ASSET](state, getters) {
    const selected = findNestedObj(
      getters.assetTree,
      "id",
      state.selectedAsset.id
    );

    const childrenMeasurements = extractMeasurements(
      selected,
      state.measurements
    );

    const aggregatedMeasurements = childrenMeasurements.reduce((acc, curr) => {
      Object.keys(curr).forEach((month) => {
        if (acc[month]) {
          acc[month] += curr[month];
        } else {
          acc[month] = curr[month];
        }
      });

      return acc;
    }, {});

    return aggregatedMeasurements;
  },
};
