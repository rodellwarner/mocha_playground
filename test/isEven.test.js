const expect = require("chai").expect;
const isEven = require("../isEven");

describe("isEven", () => {
  it("should find 12 to be even", () => {
    const L = isEven(12);
    expect(L).to.be.true;
  });

  it("should find 5 to not be even", () => {
    expect(isEven(5)).to.be.false;
  });
});
