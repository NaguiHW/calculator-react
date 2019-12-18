import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  let n1 = Big(numberOne);
  let n2 = Big(numberTwo);
  if (operation === '+') { return n1 + n2}
  if (operation === '-') { return n1 - n2}
  if (operation === 'X') { return n1 * n2}
  if (operation === '/') { return n1 / n2}
  if (operation === '%') { return n1 % n2}
};

export default operate;