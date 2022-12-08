const assert = require('chai').assert;
const tail   = require('../tail');

let result = tail(["Lighthouse", "Labs", "Hello", "Test"]);

describe("#head", () => {
  it(`returns "Hello" for ["Lighthouse", "Labs", "Hello", "Test"]`, () => {
    assert.strictEqual(result[1], "Hello");
  });
  it(`returns "Test" for ["Lighthouse", "Labs", "Hello", "Test"]`, () => {
    assert.strictEqual(result[2], "Test");
  });
  it(`returns "Labs" for ["Lighthouse", "Labs", "Hello", "Test"]`, () => {
    assert.strictEqual(result[0], "Labs");
  });
  it(`returns 3 for ["Lighthouse", "Labs", "Hello", "Test"]`, () => {
    assert.strictEqual(result.length, 3);
  });
});