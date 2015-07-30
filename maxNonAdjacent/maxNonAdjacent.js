var maxNonAdjacentSum = function(array) {
  var maxSum = 0,
      sum;

  for (var i = 0; i < array.length; i++) {
    sum = array[i] + maxNonAdjacentSum(array.slice(i+2));

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
};

// var maxNonAdjacentSum = function(array) {
  
//   var recursiveSumming = function(currNum, interimArray) {
//     if (interimArray.length === 2) {
//       return currNum + Math.max(interimArray[0], interimArray[1]);
//     }
//     if (interimArray.length === 3) {
//       return currNum + Math.max(interimArray[0] + interimArray[2], interimArray[1]);
//     }

//     return recursiveSumming(currNum + interimArray[0], interimArray.slice(2));
//   };
  
//   return Math.max(recursiveSumming(array[0], array.slice(2)), recursiveSumming(array[1], array.slice(3)));
// };

// add current max to maxNonAdjacent of rest
// base case 1: if you have three numbers, 
  // return max of either sum of outer two or the inner number
// base case 2: if you have two numbers,
  // return max

// compare that against same but starting with second number in array

// return max
