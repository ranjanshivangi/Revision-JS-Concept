const arr = [123, 124, 121, 126, 242, 343];
//var palllindromeArr = [];

const isPallindrome = (num) => {
  var numStr = num.toString();

  var reverseNum = numStr.split("").reverse().join("");
  if (reverseNum == numStr) {
    //palllindromeArr.push(reverseNum);
    return true;
  } else {
    return false;
  }
};
const findPallindrome = (arr) => {
  return arr.filter((num) => isPallindrome(num));
};

console.log(findPallindrome(arr));
//console.log("new array", palllindromeArr);
