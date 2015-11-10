// make calculator functional in module pattern style
var myCalculator = (function calculatorModule () {
  var registerTotal = 0;
  var registerCash = 0;

  var calculator = {
    // set current number
    setTotal: function (num) {
      registerTotal = num;
    },

    // get total 
    getTotal: function () {
      return registerTotal;
    },

    // perform addition
    add: function (num) {
      registerTotal += num;
      return registerTotal;
    },

    // perform subtraction
    subtract: function (num) {
      registerTotal -= num;
    },

    // perform multiplication
    multiply: function (num) {
      registerTotal *= num;
    },

    // perform division
    divide: function (num) {
      registerTotal /= num;
    },

    // get balance
    getBalance: function () {
      return calculatorCash;
    },

    // deposit calculatorCash
    depositCash: function () {
      calculatorCash += registerTotal;
    },

    // withdraw calculatorCash
    withdrawCash: function () {
      calculatorCash -= registerTotal;
    },
    
    // clear registerTotal
    clearTotal: function () {
      registerTotal = 0;
    }
  };

  return calculator;
})();