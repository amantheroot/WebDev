const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  multiply: (num1, num2) => num1 * num2,
  giveNull: () => null,
  giveUndefined: () => undefined,
  giveDefined: () => "I AM DEFINED",
  giveTruth: () => "Truth",
  giveFalse: () => "",
  createObject: () => {
    return {
      key_1: "value",
      key_2: 5,
      key_3: [1, 2, 3]
    };
  },
  createArray: () => [12, 34, 56, 78, 90],
  fetchUsername: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/10")
      .then(res => res.data)
};

module.exports = functions;
