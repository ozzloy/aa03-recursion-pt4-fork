const { expect } = require("chai");

const permutations = require("../problems/17-bonus-permutations.js");

describe("permutations()", function () {
  it("should return all permutations of the given array", function () {
    expect(permutations([1, 2])).to.have.deep.members([
      [1, 2],
      [2, 1],
    ]);
    expect(permutations([1, 2, 3])).to.have.deep.members([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
