// eslint-disable-next-line
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(parseFloat(numberOne));
  const n2 = Big(parseFloat(numberTwo));
  let total;
  if (operation === '+') {
    total = Big(parseFloat(numberOne)) + Big(parseFloat(numberTwo));
    console.log(n1)
    console.log(n2)
  }
  if (operation === '-') {
    total = n1 - n2;
    console.log(n1)
    console.log(n2)
  }
  if (operation === 'X') {
    total = n1 * n2;
  }
  if (operation === '/') {
    total = n1 / n2;
  }
  return total;
};

export default operate;
