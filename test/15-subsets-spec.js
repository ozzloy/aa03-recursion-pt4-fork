const { expect } = require("chai");

const subsets = require("../problems/15-bonus-subsets");

describe("subsets()", function () {
  it("should return all the subsets of the given array", function () {
    expect(subsets([])).to.have.deep.members([[]]);
    expect(subsets([1])).to.have.deep.members([[], [1]]);
    expect(subsets([1, 2])).to.have.deep.members([[], [1], [2], [1, 2]]);
    expect(subsets([1, 2, 3])).to.have.deep.members([
      [],
      [1],
      [2],
      [3],
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });
});
