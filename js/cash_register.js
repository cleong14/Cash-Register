// create cash register module patter style
(function cashRegisterModule () {
  console.log(myCalculator.add(2));
  debugger;
  // list of variables
  var registerCash = 3;
  var registerTotal = 2;
  var memory = 0;
  var displayValue = 0;
  var clear = document.getElementById('clear');
  var display = document.getElementById('display');
  var getBalance = document.getElementById('getBalance');
  var depositCash = document.getElementById('depositCash');
  var withdrawCash = document.getElementById('withdrawCash');
  var key0 = document.getElementById('key0');
  var key00 = document.getElementById('key00');
  var key1 = document.getElementById('key1');
  var key2 = document.getElementById('key2');
  var key3 = document.getElementById('key3');
  var key4 = document.getElementById('key4');
  var key5 = document.getElementById('key5');
  var key6 = document.getElementById('key6');
  var key7 = document.getElementById('key7');
  var key8 = document.getElementById('key8');
  var key9 = document.getElementById('key9');
  var decimal = document.getElementById('decimal');
  var divide = document.getElementById('divide');
  var times = document.getElementById('times');
  var minus = document.getElementById('minus');
  var plus = document.getElementById('plus');
  var equals = document.getElementById('equals');


  // cash register object
  var cashRegister = {

    // method to make all numbers work
    clickNumbers: function () {
      // key0 clicker
      key0.addEventListener("click", function(event) {
        display.innerHTML += 0;
      });

      // key00 clicker
      key00.addEventListener("click", function(event) {
        display.innerHTML += '00';
      });

      // key1 clicker
      key1.addEventListener("click", function(event) {
        display.innerHTML += 1;
        displayValue = parseFloat(display.innerHTML);
      });

      // key2 clicker
      key2.addEventListener("click", function(event) {
        display.innerHTML += 2;
      });

      // key3 clicker
      key3.addEventListener("click", function(event) {
        display.innerHTML += 3;
      });

      // key4 clicker
      key4.addEventListener("click", function(event) {
        display.innerHTML += 4;
      });

      // key5 clicker
      key5.addEventListener("click", function(event) {
        display.innerHTML += 5;
      });

      // key6 clicker
      key6.addEventListener("click", function(event) {
        display.innerHTML += 6;
      }); 

      // key7 clicker
      key7.addEventListener("click", function(event) {
        display.innerHTML += 7;
      });

      // key8 clicker
      key8.addEventListener("click", function(event) {
        display.innerHTML += 8;
      });

      // key9 clicker
      key9.addEventListener("click", function(event) {
        display.innerHTML += 9;
      });

      // decimal clicker
      decimal.addEventListener("click", function(event) {
        display.innerHTML += '.';
      });
    },

    registerAdd: function () {
      plus.addEventListener("click", function(event) {
        memory += displayValue;
        display.innerHTML = '';
        debugger;
      });
    },

    // registerMinus: function (num) {
    //   minus.addEventListener("click", function(event) {
    //     registerTotal -= num;
    //     display.innerHTML = '[' + '&minus;' + ']';
    //   });
    // },

    // registerTimes: function (num) {
    //   times.addEventListener("click", function(event) {
    //     registerTotal *= num;
    //     display.innerHTML = '[' + '&times;' + ']';
    //   });
    // },

    // registerDivide: function (num) {
    //   divide.addEventListener("click", function(event) {
    //     registerTotal /= num;
    //     display.innerHTML = '[' + '&divide;' + ']';
    //   });
    // },

    registerTotalEquals: function () {
      equals.addEventListener("click", function(event) {
        memory += displayValue;
        display.innerHTML =  memory;
        debugger;
      });
    },
    
    // clear display back to original state
    clearDisplay: function () {
      clear.addEventListener("click", function(event) {
        displayValue = 0;
        display.innerHTML = '';
        debugger;
      });
    },

    // get cash balance
    getBalance: function () {
      getBalance.addEventListener("click", function(event) {
        display.innerHTML = registerCash;
      });
    },

    // deposit total cash
    depositCash: function () {
      depositCash.addEventListener("click", function(event) {
        console.log(registerCash, registerTotal);
        registerCash += registerTotal;
        console.log(registerCash);
        display.innerHTML = registerCash;
      });
    },

    // withdraw cash
    withdrawCash: function () {
      withdrawCash.addEventListener("click", function(event) {
        registerCash -= registerTotal;
        display.innerHTML = registerCash;
      });
    }
  };

  // invoke functions
  cashRegister.clickNumbers();
  cashRegister.registerAdd();
  // cashRegister.registerMinus();
  // cashRegister.registerTimes();
  // cashRegister.registerDivide();
  cashRegister.registerTotalEquals();
  cashRegister.clearDisplay();
  cashRegister.getBalance();
  cashRegister.depositCash();
  cashRegister.withdrawCash();
})();