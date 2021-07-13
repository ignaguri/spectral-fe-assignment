<template>
  <section class="s-sidebar">
    <tree-view
      :items="assetTree"
      @itemClicked="handleAssetSelected"
    ></tree-view>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TreeView from "@/components/TreeView";
import {
  FETCH_ASSETS,
  SET_SELECTED_ASSET,
  ASSET_TREE,
} from "@/store/constants";

export default {
  name: "Sidebar",
  components: { TreeView },
  methods: {
    handleAssetSelected(asset) {
      this.$store.dispatch(SET_SELECTED_ASSET, asset);
    },
  },
  computed: {
    ...mapGetters([ASSET_TREE]),
  },
  mounted() {
    this.$store.dispatch(FETCH_ASSETS);
  },
};
</script>

<style scoped lang="scss">
.s-sidebar {
  color: #fff;
  background-color: #03a9f4;
  height: 90vh;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  &:visited {
    text-decoration: none;
  }
}
</style>
