import { mount } from "@vue/test-utils";
import TreeView from "../index.vue";

describe("TreeView component", () => {
  const items = [
    {
      id: 1,
      name: "item 1",
      children: [],
    },
  ];

  it("should render the component correctly", () => {
    const wrapper = mount(TreeView, {
      props: { items },
    });

    expect(wrapper.find("ul").classes()).toContain("tree-item-list");
    expect(wrapper.find("a").text()).toBe(items[0].name);
  });

  it("should emit an itemClicked event", () => {
    const wrapper = mount(TreeView, {
      props: { items },
    });

    wrapper.vm.handleItemClicked(items[0]);

    expect(wrapper.emitted().itemClicked).toHaveLength(1);
    expect(wrapper.emitted().itemClicked[0][0]).toEqual(items[0]);
  });
});
