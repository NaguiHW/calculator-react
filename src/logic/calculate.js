import operate from './operate';

const calculate = (obj, buttonName) => {
  let {total, next, operation} = obj;
  console.log(total);
  console.log(next);
  console.log(operation);
  // if (total === 'Error') {
  //   total = null;
  // } else if (buttonName === '+/-') {
  //   if (next != null) {
  //     next = (parseFloat(next) * -1).toString();
  //   } else if (total != null) {
  //     total = (parseFloat(total) * -1).toString();
  //   }
  // } else if (/[%÷X\-+]/.test(buttonName)) {
  //   if (total && !operation) {
  //     operation = buttonName;
  //   } else if (total && operation && next) {
  //     total = operate(total, next, operation);
  //     next = null;
  //     operation = buttonName;
  //   }
  // } else if (/[0123456789]/.test(buttonName)) {
  //   if (total && operation && !next) {
  //     next = buttonName;
  //   } else if (total && operation && next) {
  //     next += buttonName;
  //   } else if (total != null) {
  //     total += buttonName;
  //   } else {
  //     total = buttonName;
  //   }
  // } else if (buttonName === 'AC') {
  //   total = null;
  //   next = null;
  //   operation = null;
  // } else if (buttonName === '.') {
  //   if (total != null && operation != null && next != null) {
  //     if (!/\./.test(next)) {
  //       next += buttonName;
  //     }
  //   } else if (total != null && operation === null && next === null) {
  //     if (!/\./.test(total)) {
  //       total += buttonName;
  //     }
  //   }
  // } else if (buttonName === '=') {
  //   if (total != null && operation != null && next != null) {
  //     total = operate(total, next, operation).toString();
  //     next = null;
  //     operation = null;
  //   }
  // }
  // return {total, next, operation};
};

export default calculate;
