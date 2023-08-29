let str = "Hello World!!";

let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

let strArr = upperCaseStr.split("");
console.log(strArr);

let reverseArr = strArr.reverse();
console.log(reverseArr);

let joinStr = reverseArr.join("");
console.log("Final String", joinStr);

