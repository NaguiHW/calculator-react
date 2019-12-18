import operate from './operate';

const calculate = (obj, buttonName) => {
  const objData = obj;
  const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const OPERATIONS = ['%', '/', 'X', '-', '+'];
  if (objData.total === 'Error') {
    objData.total = null;
  } else if (OPERATIONS.includes(buttonName)) {
    if (objData.total && !objData.operation) {
      objData.operation = buttonName;
    } else if (objData.total && objData.operation && objData.next) {
      objData.total = operate(objData.total, objData.next, objData.operation);
      objData.next = null;
      objData.operation = buttonName;
    }
  } else if (NUMBERS.includes(buttonName)) {
    if (objData.total && objData.operation && !objData.next) {
      objData.next = buttonName;
    } else if (objData.total && objData.operation && objData.next) {
      objData.next += buttonName;
    } else if (objData.total != null) {
      objData.total += buttonName;
    } else {
      objData.total = buttonName;
    }
  } else if (buttonName === 'AC') {
    objData.total = null;
    objData.next = null;
    objData.operation = null;
  } else if (buttonName === '+/-') {
    if (objData.next != null) {
      objData.next *= -1;
    } else if (objData.total != null) {
      objData.total *= -1;
    }
  } else if (buttonName === '.') {
    if (objData.total != null && objData.operation != null && objData.next != null) {
      if (!/\./.test(objData.next)) {
        objData.next += buttonName;
      }
    } else if (objData.total != null && objData.operation === null && objData.next === null) {
      if (!/\./.test(objData.total)) {
        objData.total += buttonName;
      }
    }
  } else if (buttonName === '=') {
    if (objData.total != null && objData.operation != null && objData.next != null) {
      objData.total = operate(objData.total, objData.next, objData.operation);
      objData.next = null;
      objData.operation = null;
    }
  }
  return objData;
};

export default calculate;
