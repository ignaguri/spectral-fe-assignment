<template>
  <ul class="tree-item-list">
    <tree-item
      v-for="item in items"
      :key="item.id"
      class="tree-item"
      :item="item"
      :itemClicked="handleItemClicked"
    ></tree-item>
  </ul>
</template>

<script>
import TreeItem from "./TreeItem.vue";

export default {
  name: "TreeView",
  components: { TreeItem },
  props: {
    items: Array,
  },
  emits: ["itemClicked"],
  methods: {
    handleItemClicked(item) {
      this.$emit("itemClicked", item);
    },
  },
};
</script>

<style lang="scss">
.tree-item-list {
  padding-left: 2em;
  line-height: 1.8em;
}
</style>
