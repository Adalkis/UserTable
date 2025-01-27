import UserTable from "@/components/UserTable.vue";
import { mount } from "@vue/test-utils";

describe("<CustomTable/>", () => {
  test("Renders no rows when usersData prop is empty", () => {
    const wrapper = mount(UserTable, {
      props: {
        usersData: [],
      },
    });
    expect(wrapper.findAll("tbody tr").length).toBe(0);
  });

  test("Renders rows when usersData prop is not empty", () => {
    const usersData = [
      {
        id: 1,
        name: "Adalkis",
        address: "Santo Domingo",
        email: "adalkis2000@gmail.com",
        phone: "829-522-0619",
        username: "adalkis",
        website: "adalkis.com",
        company: "Adalkis",
      },
    ];
    const wrapper = mount(UserTable, {
      props: {
        usersData,
      },
    });

    const rows = wrapper.findAll("tbody tr");
    expect(wrapper.findAll("tbody tr").length).toBe(1);

    const cells = rows[0].findAll("td");

    expect(cells[0].text()).toBe(usersData[0].name);
    expect(cells[1].text()).toBe(usersData[0].address);
    expect(cells[2].text()).toBe(usersData[0].email);
    expect(cells[3].text()).toBe(usersData[0].phone);
    expect(cells[4].text()).toBe(usersData[0].username);
    expect(cells[5].text()).toBe(usersData[0].website);
    expect(cells[6].text()).toBe(usersData[0].company);
  });

  test("Renders rows when usersData prop is incomplete", () => {
    const usersData = [
      {
        id: 1,
        name: "Adalkis",
      },
    ];
    const wrapper = mount(UserTable, {
      props: {
        usersData,
      },
    });

    const rows = wrapper.findAll("tbody tr");
    expect(wrapper.findAll("tbody tr").length).toBe(1);

    const cells = rows[0].findAll("td");

    expect(cells[0].text()).toBe(usersData[0].name);
    expect(cells[1].text()).toBe("");
    expect(cells[2].text()).toBe("");
  });
});
