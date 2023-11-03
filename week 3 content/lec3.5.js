//STRICT MODE (DYNAMIC CONTEXT):
//Strict Mode vs Sloppy Mode :-
// JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript, 
//thereby implicitly opting-out of "sloppy mode" which is by default. 
//• Strict mode isn't just a subset : it intentionally has different semantics from normal code.
// To invoke strict mode for an entire script, put the exact statement "use strict";

//ways to apply strict mode :- Strict mode applies to entire scripts or to individual functions.

// Strict mode makes several changes to normal JavaScript semantics : 
// • Eliminates some JavaScript silent errors by changing them to throw errors. 
// Fixes mistakes that make it difficult for JavaScript engines to perform optimization. 
// Prohibits some syntax likely to be defined in future versions of ECMAScript.

//strict mode me jo javascript forgive karte deta hai sloppy mode me wo nai karne dega. jaise name = 'raj'; strict
// mode me error show karega , wo bolega name is not defined to pehle hame use declare karne parega jaise
// let name = 'raj'; . 'use strict' ko 2 hi jagah likh sakte hai . pehla pura script ke liye or dusra
// kisi bhi function ke liye.Independent function me this ka scope g;obal hota hai lekin  strict mode me object
//hota hai.
//ex=
// function returnThis() { 
//     "use strict"//isko javascript page ke starting me bhi likh sakte hai.
//      return this; 
// }
// console.log(returnThis());//undefined kyunki scope of this = object in strict mode .

// sloppy mode me ye sab true hoga number ko automatic object me convert kar dega kyunki
// call ka pehla argument object hota hai. lekin strict mode me sab false ho jayga.
//function fun() {
//     console.log(this);
// //  return this; 
// }
//  fun() == window; //true //we will write global if we use node
//  typeof fun.call(2)== 'object';//true
//   fun.apply(null)==window;//true 
//   fun.call(undefined) ==window//true
//   typeof fun.bind(true)() == 'object'; //1 true global; // true 'object';

//in strict mode:-
'use strict'; 
function fun() { 
//console.log(this);
 return this; 
} 
console.log(fun()== undefined); //1 true
console.log(typeof fun.call(2) == 'number');// 1 true 
console.log(fun.apply(null)== null); //1 true 
console.log(fun.call(undefined)==undefined );//1 true
console.log(typeof fun.bind(true)()=='boolean');//1 true 

//In sloppy mode, this is always an object : 
// • either the provided object if called with an object valued this; the value, boxed, 
// if called with a Boolean, string, or number this; matlab number pass karo ya string sab sloppy mode me object ban jayga
// • or the global object if called with an undefined or null this. undefined or null global/window ban jayga sloppy me