import useFormatAddress from "@/utils/useFormatAddress";

describe("useFormatAddress", () => {
  const address = {
    street: "La gaviota",
    suite: 4,
    city: "Santo Domingo",
  };

  const address1 = {
    street: address.street,
  };

  const address2 = {
    street: address.street,
    suite: address.suite,
  };

  test("Return empty string if you don't pass an address", () => {
    expect(useFormatAddress("")).toBe("");
  });

  test("Return street", () => {
    expect(useFormatAddress(address1)).toBe(`Street ${address1.street}`);
  });

  test("Return street and suite", () => {
    expect(useFormatAddress(address2)).toBe(
      `Street ${address.street} Suite ${address.suite}`
    );
  });

  test("Return address", () => {
    expect(useFormatAddress(address)).toBe(
      `Street ${address.street} Suite ${address.suite} ${address.city}`
    );
  });
});
