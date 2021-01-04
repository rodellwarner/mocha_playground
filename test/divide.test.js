// require chai and use expect
// const chai = require("chai");
// const expect = chai.expect;
// Or we can simplify this to a single line:
const expect = require("chai").expect;
const divide = require("../index");

describe("Divide function", () => {
  it("should divide positive integers correctly", () => {
    // define inputs
    const a = 8,
      b = 4,
      expectedAnswer = 2;

    // invoke the function
    const actualAnswer = divide(a, b);

    // assert that expected === actual
    expect(actualAnswer).to.equal(expectedAnswer);
  });

  it("should throw an error when divided by zero", () => {
    //define inputs
    const x = 10;
    const y = 0;

    //set up the function call
    const fn = () => {
      divide(x, y);
    };

    // assert that exception is thrown
    expect(fn).to.throw();
  });
});
