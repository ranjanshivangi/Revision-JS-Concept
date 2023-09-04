var input = "Shivangi Ranjan";
var output = input
  .split(" ")
  .map((s) => s.split("").reverse().join(""))
  .join(" ");
console.log(output);


