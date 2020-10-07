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

it("Should increment enhancement by 1 if less than 20", () => {
  expect(
    enhancer.success({
      name: "1up",
      durability: 100,
      enhancement: 19,
    })
  ).toEqual({
    name: "1up",
    durability: 100,
    enhancement: 20,
  });
});
