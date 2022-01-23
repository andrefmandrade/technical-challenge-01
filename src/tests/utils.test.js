const utils = require("../shared/utils");
test("Divisores do número", () => {
  const result = utils.divisores(45);
  expect(result).toEqual([1, 3, 5, 9, 15, 45]);
});

test("Números primos de um determinado array de números", () => {
  const result = utils.primos([1, 3, 5, 9, 15, 45]);
  expect(result).toEqual([1, 3, 5]);
});
