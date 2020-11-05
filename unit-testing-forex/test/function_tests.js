//IMPORT DEPENDENCy
const { expect } = require("chai");

//IMPORT FUNCTIONS
const { exchange, exchangeRates } = require("../src/utils");

//TEST
// it("test_exchange_usd_to_php", () => {
//   const phpValue = exchange("usd", "peso", 1000);
//   expect(phpValue).to.equal(50150);
// });

//TEST
it("test_exchange_usd_to_php", () => {
  const phpValue = exchange("usd", "peso", 1000);
  expect(phpValue).to.equal(50730);
});
