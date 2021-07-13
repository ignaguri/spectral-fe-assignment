<template>
  <li :class="listStyle">
    <a :class="{ bold: hasChildren }" @click="itemClicked(item), toggle()">
      {{ item.name }}
    </a>
    <ul class="tree-item-list" v-show="isOpen" v-if="hasChildren">
      <tree-item
        class="tree-item"
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :itemClicked="itemClicked"
      ></tree-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    item: Object,
    itemClicked: Function,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    hasChildren() {
      return this.item.children && this.item.children.length;
    },
    listStyle() {
      if (this.hasChildren && this.isOpen) {
        return "tree-item--open";
      }

      if (this.hasChildren) {
        return "tree-item--closed";
      }

      return "tree-item--last";
    },
  },
  methods: {
    toggle() {
      if (this.hasChildren) {
        this.isOpen = !this.isOpen;
      }
    },
  },
};
</script>

<style lang="scss">
.tree-item {
  cursor: pointer;
}

.bold {
  font-weight: 700;
}

.tree-item {
  &--open {
    list-style-type: disclosure-open;
  }
  &--closed {
    list-style-type: disclosure-closed;
  }
  &--last {
    list-style-type: square;
  }
}
</style>
