// make calculator functional in module pattern style
var myCalculator = (function calculatorModule () {
  var calculatorTotal = 0;
  var calculatorCash = 0;

  var calculator = {
    // perform addition
    add: function (num) {
      calculatorTotal += num;
    },

    // perform subtraction
    subtract: function (num) {
      calculatorTotal -= num;
    },

    // perform multiplication
    multiply: function (num) {
      calculatorTotal *= num;
    },

    // perform division
    divide: function (num) {
      calculatorTotal /= num;
    },

    // get balance
    getBalance: function () {
      return calculatorCash;
    },

    // deposit calculatorCash
    depositCash: function () {
      calculatorCash += calculatorTotal;
    },

    // withdraw calculatorCash
    withdrawCash: function () {
      calculatorCash -= calculatorTotal;
    },
    
    // clear calculatorTotal
    clearTotal: function () {
      calculatorTotal = 0;
    }
  };

  return calculator;
})();