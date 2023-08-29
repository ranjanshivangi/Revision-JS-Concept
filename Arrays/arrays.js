const data = ['work', 'exercise', 1, true];

let length = data.length;
console.log("length: ", length); // 4

let data2 = data.push('sleep')
console.log("push(sleep)", data, data2); // [ 'work', 'exercise', 1, true, 'sleep' ] 5

let data3 = data.unshift(5)
console.log("unshift(5)", data, data3); // [ 5, 'work', 'exercise', 1, true, 'sleep' ] 6

let data4 = data.pop();
console.log("pop:", data, data4); // [ 5, 'work', 'exercise', 1, true ] sleep

let data5 = data.shift();
console.log("shift:", data, data5); // [ 'work', 'exercise', 1, true ] 5

data.sort();
console.log("sort", data); // [ 1, 'exercise', true, 'work' ]

let data6 = data.slice(1,3);
console.log("slice(1,3):", data, data6) // [ 'exercise', true ]
let data7 = data.slice(1);
console.log("slice(1):", data, data7) // [ 'exercise', true, 'work' ]


const myArr = [[1,2],[3,4],[5,6]];
const flatmyArr = myArr.flat();
console.log("flat: ", flatmyArr) // [ 1, 2, 3, 4, 5, 6 ]

console.log("data.concat(myArr)", data.concat(flatmyArr)); // [ 1, 'exercise', true, 'work', 1, 2, 3, 4, 5, 6 ] 


// MAP:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// FILTER:
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades); 
  // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]

  //REDUCE:
  const numbersArr = [1, 2, 3, 4];
  const sum = numbersArr.reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum); // 10