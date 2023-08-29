let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 16 , 20];
let primeArr = [];

const checkPrime = () => {
    //console.log("vyiyevfiywgf");
  for (let i = 0; i < arr.length; i++) {
    //console.log("2");
      let count = 0;
      
        for (let k = 1; k <= arr[i] / 2; k++) {
          if (arr[i] % k == 0) {
            count ++;
            console.log(count, i, k);
           
          }
        }
        if (count == 1) {
            primeArr.push(arr[i]);
          }
      
    }
  
};
checkPrime();
console.log(primeArr);
