import { mount } from "@vue/test-utils";
import ControlGrid from "../../../src/components/UI/the-control/ControlGrid";

test("ctrGridParent class exists", () => {
  const wrapper = mount(ControlGrid);

  expect(wrapper.classes("ctrGridParent")).toBe(true);
});
