import operate from './operate';

const calculate = (obj, buttonName) => {
  const NUMBERS = '0123456789.';
  const OPERATIONS = ['+', '-', 'X', '/']
  let {total, next, operation} = obj;

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '=') {
    if (next) {
      total = operate(parseFloat(total), parseFloat(next), operation);
      next = null;
      operation = buttonName;
    } else {
      return
    }
  }

  if (NUMBERS.includes(buttonName)) {
    if (!total) {
      total = buttonName
    }
    if (total) {
      if (!operation) {
        total += buttonName
      }
      if (operation === '=' && !next) {
        total = buttonName
      }
    }
  }

  if (OPERATIONS.includes(buttonName)) {
    if (!operation) {
      operation = buttonName;
    } else if (operation && next) {
      total = operate(parseFloat(total), parseFloat(next), operation);
      next = null
      operation = buttonName;
    }
  }
  if (total) {
    total = total.toString();
  }
  if (next) {
    next = next.toString();
  }
  console.log(total)
  console.log(next)
  console.log(operation)
  return {total, next, operation}
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
