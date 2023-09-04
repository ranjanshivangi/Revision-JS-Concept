//Example:

//Input:
let map1 = new Map([
    [1 , 10], [2 , 20] ,
    [3, 30],[4, 40]
    ]);
     
console.log("Map1: ");
console.log(map1);

//Output:
// Map1: 
// Map(4) { 1 => 10, 2 => 20, 3 => 30, 4 => 40 }

//Example 2: 
let map2 = new Map([
    [1, 2],
    [2, 3],
    [4, 5]
]);
  
console.log("Map2");
console.log(map2);
  
let map3 = new Map([
    ["firstname", "sumit"],
    ["lastname", "ghosh"],
    ["website", "geeksforgeeks"]
]);
  
console.log("Map3");
console.log(map3);

//Example 3:
let map4 = new Map();
map4.set("FirstName", "Shobhit");
map4.set("LastName", "Sharma");
map4.set("website", "GeeksforGeeks");
  
console.log(map4);