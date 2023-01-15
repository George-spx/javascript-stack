//Create a function `sumUntil` that takes in a parameter and retunrs the sum of all numbers ranging from one to the value passed as parameter.
function sumUntil(maxValue) {
  if(maxValue > 0) {
    return maxValue + sumUntil(maxValue - 1);
  }else{
    return maxValue;
  }
}

console.log(sumUntil(5));