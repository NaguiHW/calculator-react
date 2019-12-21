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
    }
  }

  if (buttonName === '+/-') {
    if(total) {
      if (!next) {
        total *= -1;
        total = total.toString();
      } else if (next) {
        next *= -1;
        next = next.toString();
      }
    }
  }

  if (buttonName === '%') {
    if(total) {
      if (!next) {
        total /= 100;
        total = total.toString();
      } else if (next) {
        if (operation === '+' || operation === '-') {
          next = total * (next / 100);
        } else if (operation === 'X' || operation === '/') {
          next /= 100;
        }
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
    }
  }

  if (NUMBERS.includes(buttonName)) {
    if (!total) {
      if(buttonName === '.') {
        total = '0.';
      } else {
        total = buttonName;
      }
    }else if (total) {
      if (!operation) {
        if (total.includes('.') && buttonName === '.') {
          return
        } else {
          total += buttonName;
        }
      } else if (operation === '=' && !next) {
        if(buttonName === '.') {
          total = '0.';
        } else {
          total = buttonName;
        }
        operation = null;
      } else if (OPERATIONS.includes(operation)) {
        if (!next) {
          if(buttonName === '.') {
            next = '0.';
          } else {
            next = buttonName;
          }
        } else if (next) {
          if (next.includes('.') && buttonName === '.') {
            return
          } else {
            next += buttonName;
          }
        }
      }
    }
  }

  if (OPERATIONS.includes(buttonName)) {
    if (!operation || (operation === '=' && !next)) {
      operation = buttonName;
    } else if (operation && next) {
      total = operate(parseFloat(total), parseFloat(next), operation);
      next = null
      operation = buttonName;
    }
  }
  return {total, next, operation}
};

export default calculate;
