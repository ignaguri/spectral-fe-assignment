import { mount } from "@vue/test-utils";
import Sidebar from "../index.vue";
import TreeView from "@/components/TreeView";
import { FETCH_ASSETS, SET_SELECTED_ASSET } from "@/store/constants";

describe("Sidebar component", () => {
  const dispatch = jest.fn();

  const item = {
    id: 1,
    name: "item 1",
    children: [],
  };

  const global = {
    mocks: {
      $store: {
        getters: {
          assetTree: [item],
        },
        dispatch,
      },
    },
  };

  beforeEach(() => {
    dispatch.mockClear();
  });

  it("should render the component correctly", () => {
    const wrapper = mount(Sidebar, { global });

    expect(wrapper.find("section").classes()).toContain("s-sidebar");
    expect(dispatch).toHaveBeenCalledWith(FETCH_ASSETS);
  });

  it("should dispatch the setSelectedAsset action when an asset is clicked", () => {
    const wrapper = mount(Sidebar, { global });

    wrapper.findComponent(TreeView).componentVM.handleItemClicked(item);

    expect(dispatch).toHaveBeenCalledWith(SET_SELECTED_ASSET, item);
  });
});
