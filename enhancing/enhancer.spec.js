const enhancer = require("./enhancer.js");
// test away!

describe("repair", () => {
  it("should restore durability to 100", () => {
    expect(
      enhancer.repair({
        name: "Joshua",
        durability: 80,
        enhancement: 10,
      })
    ).toEqual({
      name: "Joshua",
      durability: 100,
      enhancement: 10,
    });
  });
});
