// Regular Function.
function Greet() {
  console.log("Welcome to GFG!");
}
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function () {
  console.log("Welcome to GFG!");
})();

//Example:
// Declaring the parameter required.
(function (dt) {
  console.log(dt.toLocaleTimeString());
  // Passing the Parameter.
})(new Date());
