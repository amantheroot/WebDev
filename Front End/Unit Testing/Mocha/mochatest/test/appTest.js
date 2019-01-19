const app = require("../src/app");
const assert = require("chai").assert;

describe("App", () => {
  describe("sayHelloWorld()", () => {
    it("app should return Hello World", () => {
      assert.equal(app.sayHelloWorld(), "Hello World");
    });
    it("app should return a string", () => {
      let result = app.sayHelloWorld();
      assert.typeOf(result, "string");
    });
  });
  describe("addNumbers()", () => {
    it("4 + 7 should be above 10 and 8", () => {
      let sum = app.addNumbers(4, 7);
      assert.isAbove(sum, 10);
      assert.isAbove(sum, 8);
    });
  });
});
