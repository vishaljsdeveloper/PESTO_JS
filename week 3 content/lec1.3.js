// //NUMBER SYSTEM:-

// Values:-
// • Numbers 
// ● Strings 
// • Booleans 
// •Objects 
// • null 
// • undefined 


// Numbers 
// • Only one number type
//  ■ No integers 
//  • 64-bit floating point 
//  • IEEE-754 (aka "Double") 
//  • Special Numbers in JAVASCRIPT are
//   ■ NaN and ■ Infinity 
// • Does not map well to common understanding of arithmetic : • 0.1 +0.2=0.30000000000000004  not 0.3
// • Infinity is larger than any other number (except NaN). 
// Similarly, -Infinity is smaller than any other number (except NaN).
// basically infinity is used of setting boundary. typeof infinity id Number.
// EX=
// function max(array) { 
// let currentMax = -Infinity;
//  for (const el of array) {
//       if (el > currentMax) { 
//           currentMax = el; 
//         }
//      }
//       return currentMax;
//     }



//     Converting to Number 
//     Value Type                            Result 
//      undefined                             NaN
//      null                                   0
//      Boolean                               True -> 1, false -> 0 
//      number                                same number
//      string                               try to convert the string to number. Empty string is 0.
//      object                                 ToPrimitive algorithm



//      NaN
//     The error value NaN (stands for "not a number") is a number value. 
//     It can be produced by errors such as the following :
//     Number ('abc')// output= NaN 
//      Number (undefined) //output= NaN 
//      Note : NaN is the only value that is not equal to itself : EX=
//      let a = Number(undefined);
//       console.log(a); //NAN
//       console.log(a== a);//false because NAN is not equal to itself
//       ex2:-
//       console.log([1, 2, NaN, 3].indexOf(NaN));//-1 because index of use logic of equality operator andnan is 
//       //not equal to itself
//       console.log(isNaN(a))//true : isNaN is a function to check whether it is isNaN or not
     