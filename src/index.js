const prompt = require("prompt-sync")();
const { divisores, primos } = require("./shared/utils");

console.log(
  "Calcule os divisores e divisores primos de um determinado número."
);
while (true) {
  const entrada = prompt("Informe um número: ");

  const numero = Number(entrada);

  if (Number.isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
    console.log("Entrada inválida, favor informar um número válido!");
    continue;
  }

  const todosDivisores = divisores(numero);
  const todosPrimos = primos(todosDivisores);

  console.log(`Número de entrada: ${numero}`);
  console.log(`Números divisores: ${todosDivisores.join(", ")}`);
  console.log(`Divisores Primos: ${todosPrimos.join(", ")}`);

  process.exit();
}
