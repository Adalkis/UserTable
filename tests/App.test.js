import { vi } from "vitest";
import UserService, { api } from "@/services/UserService";

describe("<App/>", () => {
  test("UsersService.getUsers", async () => {
    const res = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ];

    const mockedAxiosApi = vi.spyOn(api, "get").mockResolvedValue({
      data: res,
    });

    const usersRes = await UserService.getUsers();

    expect(mockedAxiosApi).toHaveBeenCalledWith("/users");
    expect(usersRes).toStrictEqual(res);
  });
});
