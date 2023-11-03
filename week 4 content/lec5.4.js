// Distinguishing .prototype and [[Prototype]] 
// • [[Prototype]] :-
// it is an internal property present on all objects. 
// ■ It is a special property. because we use grtprototypeof,setprototype here only.
//  ■ It's value may either be another object's reference or null. 

//  .prototype :-
//  it is an object 
//  ■ It is present only on functions (defined using the function keyword) , it is not present in the arrow function 
//  because we cant declare constructor using arrow function.
//  ■ It contains (generally) values and methods shared by all objects of that "class" 
//  ■ It is not special in the sense of [[Prototype]]

// Two important rules 
// 1 An object (by default) always inherits from it's creator function (or class) .prototype` object. 
// For {}, the creator is Object function. Hence, it inherits from Object.prototype 
// • For [], the creator is the Array function. Hence, it inherits from Array.prototype 
// • For a Person instance p, the creator function is Person function. Hence, it inherits from Person.prototype.

// 2. Object.prototype's prototype is null.

//ex=
function Person() { }
const p = new Person();
// Object.getPrototypeOf(p);//person.prototype
// Object.getPrototypeOf(Person);//Function.prototype ,note: it is not 'f'unction 
// Object.getPrototypeOf(Object);//Function.prototype , ye bhi ek Function hi hai
// Object.getPrototypeOf(Function.prototype);//Object.prototype
// Object.getPrototypeOf(Object.prototype);//null
// Object.getPrototypeOf(Function);//Function.prototype

console.log(Object.getPrototypeOf(p) == Person.prototype); //true
console.log(Object.getPrototypeOf(Person) == Function.prototype); //true
console.log(Object.getPrototypeOf(Object) == Function.prototype); //true
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype); //true
console.log(Object.getPrototypeOf(Object.prototype) == null); //true
console.log(Object.getPrototypeOf(Function) == Function.prototype); //true