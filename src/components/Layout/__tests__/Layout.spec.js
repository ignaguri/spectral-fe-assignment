import { shallowMount } from "@vue/test-utils";
import Layout from "../index.vue";

describe("Layout component", () => {
  it("should render the component correctly", () => {
    const wrapper = shallowMount(Layout);

    expect(wrapper.find("header").text()).toBe("Spectral Front-end assignment");
    expect(wrapper.find(".sidebar")).toBeDefined();
    expect(wrapper.find(".content")).toBeDefined();
  });
});
