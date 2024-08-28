const assert = require("assert");
const { expect } = require("chai");

const makeBetterChange = require("../problems/18-bonus-make-change.js");

describe("makeBetterChange()", function () {
  it("should make change using the fewest coins", function () {
    expect(makeBetterChange(21)).to.have.members([1, 10, 10]);
    expect(makeBetterChange(75)).to.have.members([25, 25, 25]);
    expect(makeBetterChange(33, [15, 3])).to.have.members([3, 15, 15]);
    expect(makeBetterChange(34, [15, 3])).to.eq(null);
    expect(makeBetterChange(24, [10, 7, 1])).to.have.members([7, 7, 10]);
  });
});
