import { mount } from "@vue/test-utils";
import TreeItem from "../TreeItem.vue";

describe.only("TreeItem component", () => {
  const itemClicked = jest.fn();
  const item = {
    id: 1,
    name: "item 1",
    children: [
      {
        id: 2,
        name: "item 2",
        children: [],
      },
    ],
  };

  beforeEach(() => {
    itemClicked.mockClear();
  });

  describe("render", () => {
    it("should render the component correctly - collapsed", () => {
      const wrapper = mount(TreeItem, {
        props: { item, itemClicked },
      });

      expect(wrapper.find("a").text()).toBe(item.name);
      expect(wrapper.find("a").classes()).toContain("bold");
      expect(wrapper.find("ul").isVisible()).toBe(false);
    });

    it("should render the component correctly - expanded", () => {
      const wrapper = mount(TreeItem, {
        props: { item, itemClicked },
        data() {
          return { isOpen: true };
        },
      });

      expect(wrapper.find("a").text()).toBe(item.name);
      expect(wrapper.find("ul").isVisible()).toBe(true);
      expect(wrapper.findAll("a")[1].text()).toBe(item.children[0].name);
    });
  });

  describe("events", () => {
    it("should emit an itemClicked event", () => {
      const wrapper = mount(TreeItem, {
        props: { item, itemClicked },
      });

      wrapper.find("a").trigger("click");

      expect(itemClicked).toHaveBeenCalledWith(item);
    });

    it("should toggle the children list visibility", () => {
      const wrapper = mount(TreeItem, {
        props: { item, itemClicked },
      });

      expect(wrapper.vm.isOpen).toBe(false);
      wrapper.vm.toggle();
      expect(wrapper.vm.isOpen).toBe(true);
    });
  });

  describe("computed properties", () => {
    it("should return a truthy value when the item has children", () => {
      const wrapper = mount(TreeItem, {
        props: { item },
      });

      expect(wrapper.vm.hasChildren).toBeTruthy();
    });

    it("should return the corresponding list style - open", () => {
      const wrapper = mount(TreeItem, {
        props: { item },
        data() {
          return { isOpen: true };
        },
      });

      expect(wrapper.vm.listStyle).toBe("tree-item--open");
    });

    it("should return the corresponding list style - closed", () => {
      const wrapper = mount(TreeItem, {
        props: { item },
        data() {
          return { isOpen: false };
        },
      });

      expect(wrapper.vm.listStyle).toBe("tree-item--closed");
    });

    it("should return the corresponding list style - last", () => {
      const wrapper = mount(TreeItem, {
        props: { item: item.children[0] },
      });

      expect(wrapper.vm.listStyle).toBe("tree-item--last");
    });
  });
});
