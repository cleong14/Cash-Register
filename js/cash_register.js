// create cash register module patter style
(function cashRegisterModule () {
  // list of variables
  var registerCash = 0;
  var registerTotal = 0;
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
  var multiply = document.getElementById('multiply');
  var subtract = document.getElementById('subtract');
  var add = document.getElementById('add');
  var equals = document.getElementById('equals');


  // cash register object
  var cashRegister = {

    // method to make all numbers work
    clickNumbers: function () {
      // key0 clicker
      key0.addEventListener("click", function(event) {
        display.innerHTML += 0;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key00 clicker
      key00.addEventListener("click", function(event) {
        display.innerHTML += '00';
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key1 clicker
      key1.addEventListener("click", function(event) {
        display.innerHTML += 1;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
        console.log(event);
      });

      // key2 clicker
      key2.addEventListener("click", function(event) {
        display.innerHTML += 2;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key3 clicker
      key3.addEventListener("click", function(event) {
        display.innerHTML += 3;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key4 clicker
      key4.addEventListener("click", function(event) {
        display.innerHTML += 4;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key5 clicker
      key5.addEventListener("click", function(event) {
        display.innerHTML += 5;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key6 clicker
      key6.addEventListener("click", function(event) {
        display.innerHTML += 6;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      }); 

      // key7 clicker
      key7.addEventListener("click", function(event) {
        display.innerHTML += 7;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key8 clicker
      key8.addEventListener("click", function(event) {
        display.innerHTML += 8;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // key9 clicker
      key9.addEventListener("click", function(event) {
        display.innerHTML += 9;
        displayValue = parseFloat(display.innerHTML);
        console.log(displayValue);
      });

      // decimal clicker
      decimal.addEventListener("click", function(event) {
        display.innerHTML += '.';
        displayValue = Number(display.innerHTML);
        console.log(displayValue);
      });
    },

    registerAdd: function () {
      add.addEventListener("click", function(event) {
        memory += displayValue;
        display.innerHTML = '';
        console.log(event);
        debugger;
      });
    },

    registerSubtract: function () {
      subtract.addEventListener("click", function(event) {
        memory -= displayValue;
        display.innerHTML = '';
      });
    },

    registerMultiply: function () {
      multiply.addEventListener("click", function(event) {
        memory *= displayValue;
        display.innerHTML = '';
      });
    },

    registerDivide: function () {
      divide.addEventListener("click", function(event) {
        memory /= displayValue;
        display.innerHTML = '';
      });
    },

    registerTotalEquals: function () {
      equals.addEventListener("click", function(event) {
        memory += displayValue;
        registerTotal = memory;
        display.innerHTML =  registerTotal;
      });
    },
    
    // clear display back to original state
    clearDisplay: function () {
      clear.addEventListener("click", function(event) {
        displayValue = 0;
        display.innerHTML = '';
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
        registerCash += displayValue;
        display.innerHTML = registerCash;
      });
    },

    // withdraw cash
    withdrawCash: function () {
      withdrawCash.addEventListener("click", function(event) {
        registerCash -= displayValue;
        display.innerHTML = registerCash;
      });
    }
  };

  // invoke functions
  cashRegister.clickNumbers();
  cashRegister.registerAdd();
  cashRegister.registerSubtract();
  cashRegister.registerMultiply();
  cashRegister.registerDivide();
  cashRegister.registerTotalEquals();
  cashRegister.clearDisplay();
  cashRegister.getBalance();
  cashRegister.depositCash();
  cashRegister.withdrawCash();
})();