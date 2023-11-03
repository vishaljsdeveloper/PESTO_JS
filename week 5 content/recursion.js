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
  maxNumber, outputArray = [0, 1,]
}) {
  let nextNumber = outputArray[outputArray.length - 1] + outputArray[outputArray.length - 2]

  if (
    nextNumber >= maxNumber) {
    return outputArray
  }

  counter++

  return recursionForFibo({
    maxNumber,
    outputArray: [
      ...outputArray,
      nextNumber
    ]
  })
}



console.log(recursionForFibo({ maxNumber: 1022 }));

console.log({ counter });














