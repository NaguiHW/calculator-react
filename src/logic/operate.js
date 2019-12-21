// eslint-disable-next-line
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);
  let total;
  if (operation === '+') {
    total = n1.plus(n2)
  }
  if (operation === '-') {
    total = n1.minus(n2);
  }
  if (operation === 'X') {
    total = n1.times(n2);
  }
  if (operation === '/') {
    total = n1.div(n2);
  }
  return total.toString();
};

export default operate;
