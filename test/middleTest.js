const assert = require('chai').assert;
const middle   = require('../middle');

describe("#head", () => {
  it("returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });
  it("returns [] for [6]", () => {
    assert.deepEqual(middle([6]), []);
  });  it("returns [6, 5] for [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
    assert.deepEqual(middle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [6, 5]);
  });
});