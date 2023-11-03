const arr = [23, 45, 54, 32, 34, 55, 99, 2, 5, 1, 1022]

// create fibonnaci series for all the numbers

// use recursion of fibonnaci

// optimize the soln for time and space complexity

// [
// [1, 1, 2, 3, ... 21, 23],
// [.....]
// ]

let counter = 0

function recursionForFibo({
  maxNumber, outputArray = [0, 1]
}) {
  let nextNumber = outputArray[outputArray.length - 1] + outputArray[outputArray.length - 2]
 let cache={};
 if (outputArray in cache){
   return cache[outputArray]
 }

  else if (
    nextNumber >= maxNumber) {
    return outputArray
  }

  counter++

  cache[outputArray] = recursionForFibo({
    maxNumber,
    outputArray: [
      ...outputArray,
      nextNumber
    ]
  })
  return cache[outputArray]
}



console.log(recursionForFibo({ maxNumber: 1022 }));
console.log(recursionForFibo({ maxNumber: 10 }));
console.log(arr.forEach(function(numb){recursionForFibo({ maxNumber: numb })}));


console.log({ counter });














