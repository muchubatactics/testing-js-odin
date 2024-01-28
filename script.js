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

let Calculator = (function() {
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

function caesarCipher() {

}

function analyzeArray() {

}

module.exports = {
  capitalize, reverseString, Calculator,
  caesarCipher, analyzeArray,
};

capitalize('john doe');