//.APPLY (DYNAMIC CONTEXT)
//.APPLY :- It is exactly like .call except the way we pass argument.
//.apply :-The apply() method calls a function with a given this value, and arguments provided 
//as an array (or an array-like object).
//EX=
var numbers = [5, 6, 2, 3, 7]; //numbers pehle se array me hai to isko array me aise [numbers] pass nai karenge.
 //agar argument array me nai hota to use array me pass karte // null = object as a argument nai hai
var max = Math.max.apply(null, numbers); //internally = Math.max(5, 6, 2, 3, 7) 
console.log(max); 
var min = Math.min.apply(null, numbers); //internally= Math.min(5, 6, 2, 3, 7) 
console.log(min);
var max = Math.max.apply(null, [2,3,4,5,6]); //aise bhi pass kar sakte hai agar argument known ho to
console.log(max); 

//Note : While the syntax of apply function is almost identical to that of call(), the fundamental difference 
//is that call() accepts an argument list and pass it positionly, while apply() accepts a single array of arguments.
//and internally apply is gping to take each element of an array and pass it to the function positionly.

//EFFECT OF DIFFERENCE BETWEEN CALL AND APPLY :- With call, you have to know the arguments at compile time 
//matlab agar compile time me argument kitna hai ye pata hai to call ko use karo. With apply, you can defer that 
//decision at runtime. matlab agar argument kisi file se aa raha hai dynamically or pata nai ki kitna argument 
//aane wala hai jaise ki Math.max me hai to is case me apply use karna hai
