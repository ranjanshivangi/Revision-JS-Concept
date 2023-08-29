let text = "Hello World! ";
let text2 = "Welcome to universe";

console.log("charAt(0): ", text.charAt(0)); // H

console.log("charCodeAt(0): ", text.charCodeAt(0)); // 72

console.log("length: ", text.length); // 13

let text3 = text.concat(text2);
console.log("concatinated string: ", text3); // Hello World! Welcome to universe

console.log("indexOf(to): ", text3.indexOf("to")); // 21
console.log("indexOf(W): ", text3.indexOf("W")); // 6
console.log("lastIndexOf(W): ", text3.lastIndexOf("W")); // 13

console.log("includes(W)", text3.includes("W")); // true
console.log("includes(Welcome)", text3.includes("Welcome")); // true
console.log("includes(Z)", text3.includes("Z")); // false

console.log("endsWith(e)", text3.endsWith("e")); // true
console.log("endsWith(universe)", text3.endsWith("universe")); // true
console.log("endsWith(hello)", text3.endsWith("hello")); // false
console.log("startsWith(H)", text3.startsWith("H")); // true
console.log("startsWith(Hello)", text3.startsWith("Hello")); // true
console.log("startsWith(Y)", text3.startsWith("Y")); // false

let textUpperCase = text.toUpperCase();
console.log("uppercase: ", textUpperCase); // HELLO WORLD!
let textlowerCase = text.toLowerCase();
console.log("uppercase: ", textlowerCase); // hello world!

let number = 2;
let numberToString = number.toString();
console.log("numberToString: ", numberToString); // 2
console.log(typeof numberToString); // string

let text1 = "      Javascript     Concepts   "
console.log("trim: ", text1.trim()); // Javascript     Concepts
console.log("trimEnd:", text1.trimEnd()); //       Javascript     Concepts
console.log("trimStart:", text1.trimStart());// Javascript     Concepts   

let splitBySpace = text3.split(" ");
console.log("splitBySpace: ", splitBySpace); // [ 'Hello', 'World!', 'Welcome', 'to', 'universe' ]
let splitByExc = text3.split("!");
console.log("splitByExc: ", splitByExc);// [ 'Hello World', ' Welcome to universe' ]

console.log("slice(5): ", text3.slice(5));// World! Welcome to universe
console.log("slice(5,10): ", text3.slice(5,10)); // Worl
