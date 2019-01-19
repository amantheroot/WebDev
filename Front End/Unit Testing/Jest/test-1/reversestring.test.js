const reverseString = require("./reversestring");

test("reverseString exists", () => {
  expect(reverseString).toBeDefined();
});

test("String Reverses", () => {
  expect(reverseString("Hello World!")).toEqual("!dlroW olleH");
});
