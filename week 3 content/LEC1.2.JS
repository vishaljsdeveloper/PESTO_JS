// //DATA TYPES:-

// Primitive Values Versus Objects 
// • JavaScript makes a somewhat arbitrary distinction between values :
//  The primitive values are booleans, numbers, strings, null, and undefined. 
//  • All other values are objects.
// A major difference between the two is how they are compared;
//  each object has a unique identity and is only (strictly) equal to itself : 
 //EX:-
//  var obj1 = {};  // an empty object
//   var obj2 = {}; // another empty object 
//   obj1 === obj2 //false >
//   obj1 === obj1 //true



// undefined and null 
// • Most programming languages have values denoting missing information. 
// • JavaScript has two such "nonvalues," undefined and null. 
// • undefined means "no value." 
// ▪ Uninitialized variables are undefined :
// var x;
//  console.log(x);//undefined
// ▪ Missing parameters are undefined 
// function sum(a, b) {
//     console.log(a);//5
//     console.log(b);//undefined
//  } sum(5); //! point of execution
// ▪ If you read a nonexistent property, you get undefined
// const obj = {}; 
// console.log(obj.name);//undefined because name property does not exist

// null means "no object." 
// It is used as a nonvalue whenever an object is expected (parameters, last in a chain of objects, etc.).
//null is intentional.
// EX=
// function countLength(obj) { 
//     if (obj= null) { 
//         throw new Error('expected an object');
//          }
//           return Object.keys(obj).length; 
//         } 
//         console.log(countLength(null));