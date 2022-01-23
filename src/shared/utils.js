function divisores(numero) {
  const auxiliarDivisores = [];

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      auxiliarDivisores.push(i);
    }
  }

  return auxiliarDivisores;
}

function primos(arrayDivisores) {
  const auxiliarPrimos = [];

  arrayDivisores.map((divisor) => {
    if (divisor === 1) {
      auxiliarPrimos.push(divisor);
      return;
    }

    const auxiliarDivisores = divisores(divisor);

    if (auxiliarDivisores.length !== 2) return;

    if (
      auxiliarDivisores[0] === 1 &&
      auxiliarDivisores[auxiliarDivisores.length - 1] === divisor
    ) {
      auxiliarPrimos.push(divisor);
    }
  });

  return auxiliarPrimos;
}

module.exports = { divisores, primos };
