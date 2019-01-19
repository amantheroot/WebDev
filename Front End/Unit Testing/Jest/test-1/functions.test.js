const functions = require("./functions");

//
test("Adds 1 + 10 to get 11", () => {
  expect(functions.add(1, 10)).toBe(11);
});
test("Multiplies 3 to 8 to get 24", () => {
  expect(functions.multiply(3, 8)).toBe(24);
});
test("Does (2 + 3) * 4 to get 20", () => {
  expect(functions.multiply(functions.add(2, 3), 4)).toBe(20);
});

//
test("Adds 3 + 5 to NOT be 15", () => {
  expect(functions.add(3, 5)).not.toBe(15);
});

//
test("Expect Null", () => {
  expect(functions.giveNull()).toBeNull();
});
test("Expect Undefined", () => {
  expect(functions.giveUndefined()).toBeUndefined();
});
test("Expect Defined", () => {
  expect(functions.giveDefined()).toBeDefined();
});
test("Expect Truthy", () => {
  expect(functions.giveTruth()).toBeTruthy();
});
test("Expect Falsy", () => {
  expect(functions.giveFalse()).toBeFalsy();
});

//
test("Expect correct object", () => {
  expect(functions.createObject()).toEqual({
    key_1: "value",
    key_2: 5,
    key_3: [1, 2, 3]
  });
});
test("Expect correct array", () => {
  expect(functions.createArray()).toEqual([12, 34, 56, 78, 90]);
});

//
test("Expect less than 500", () => {
  expect(300 - 200).toBeLessThan(500);
});
test("Expect greater than 500", () => {
  expect(300 * 200).toBeGreaterThan(500);
});
test("Expect less than or Equal to 500", () => {
  expect(300 + 200).toBeLessThanOrEqual(500);
});
test("Expect greater than or Equal to 500", () => {
  expect(100 + 400).toBeGreaterThanOrEqual(500);
});

//
test('There is no "I" in Shreki', () => {
  expect("Shreki").not.toMatch(/I/);
});
test('There is no "I" in Shreky', () => {
  expect("Shreky").not.toMatch(/I/i);
});

//
test("Expect 42 to be in the array", () => {
  expect([1, 2, 3, Infinity, 4, 43, 42, 54, "42", ["Forty", "Two"]]).toContain(
    42
  );
});

//
test("Username should be Moriah.Stanton", () => {
  expect.assertions(1);
  return functions.fetchUsername().then(data => {
    expect(data.username).toBe("Moriah.Stanton");
  });
});
test("Username should be Moriah.Stanton", async () => {
  expect.assertions(1);
  const data = await functions.fetchUsername();
  expect(data.username).toBe("Moriah.Stanton");
});

//
const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("...Database Closed");

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

//
beforeAll(() => console.log("Tests Started"));
afterAll(() => console.log("Tests Ended"));

//
describe("Check Age", () => {
  beforeEach(() => console.log("Checking Age"));
  afterEach(() => console.log("Age Checked"));

  test("Age is 18", () => {
    let age = 18;
    expect(age).toBe(18);
  });
  test("Age is 21", () => {
    let age = 21;
    expect(age).toBe(21);
  });
  test("Age is 32", () => {
    let age = 32;
    expect(age).toBe(32);
  });
});
