function capitalize(str) {
  let ss = '', temp;
  str.trim().split(' ').forEach(element => {
    temp = element.charCodeAt(0);
    if (temp >= 97 && temp <= 122) {
      element = String.fromCharCode(temp - 32) + element.substr(1, element.length - 1);
    }
    if (!ss) ss = ss.concat(element);
    else ss = ss.concat(' ', element);
  });
  return ss;
}

function reverseString(str) {
  let ss = '';
  for (let i = str.length - 1; i >= 0; i--) {
    ss += str[i];
  }
  return ss;
}

const Calculator = (function() {
  function add(x, y) {
    x = Number(x);
    y = Number(y);
    return x && y ? x + y : undefined;
  }

  function multiply(x, y) {
    x = Number(x);
    y = Number(y);
    return x && y ? x * y : undefined;
  }

  function subtract(x, y) {
    x = Number(x);
    y = Number(y);
    return x && y ? x - y : undefined;
  }

  function divide(x, y) {
    x = Number(x);
    y = Number(y);
    return x && y ? x / y : undefined;
  }

  return {
    add, subtract, multiply, divide,
  }
})();

function caesarCipher(str) {
  let ss = '', temp;
  for (let i = 0; i < str.length; i++) {
    temp = str.charCodeAt(i);
    if ((temp >= 97 && temp <= 122) || (temp >= 65 && temp <= 90)) {
      temp += 3;
      if ((temp >= 97 && temp <= 122) || (temp >= 65 && temp <= 90)) {
        ss += String.fromCharCode(temp);
      } else {
        if (temp > 122) temp = 97 + (temp - 123);
        else temp = 65 + (temp - 91);
        ss += String.fromCharCode(temp);
      }
    } else ss += String.fromCharCode(temp);
  }

  return ss;
}

function analyzeArray(arr) {
  let average = 0, min = arr[0], max = arr[0], length;
  length = arr.length;
  for (let i = 0; i < length; i++) {
    average += arr[i];
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  average /= length;
  return {average, min, max, length};
}

module.exports = {
  capitalize, reverseString, Calculator,
  caesarCipher, analyzeArray,
};

capitalize('john doe');