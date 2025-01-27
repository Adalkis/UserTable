import CustomTable from "@/components/CustomTable.vue";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

describe("<CustomTable/>", () => {
  test("Renders td tag when isLoading is true", () => {
    const isLoading = ref(true);
    const wrapper = mount(CustomTable, {
      global: {
        provide: {
          isLoading,
        },
      },
    });

    expect(wrapper.find("td").exists()).toBe(true);
  });

  test("Does not render td tag when isLoading is false", () => {
    const isLoading = ref(false);
    const wrapper = mount(CustomTable, {
      global: {
        provide: {
          isLoading,
        },
      },
    });

    expect(wrapper.find("td").exists()).toBe(false);
  });

  test("Apply customClass to the table", () => {
    const wrapper = mount(CustomTable, {
      props: {
        customClass: "table-striped",
      },
    });

    expect(wrapper.find("table").classes()).toContain("table-striped");
  });
});
