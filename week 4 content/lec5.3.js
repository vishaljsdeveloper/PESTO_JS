// Constructor Functions:-
// When a function is used as a constructor (with the new keyword), its 'this' is bound to the new object being 
// constructed.
// When a function is executed with the new keyword, it does the following steps :
//  A new empty object is created and assigned to this. 
//  The prototype of the this object is changed <FnName>.prototype 
//  • The function body executes. Usually it modifies this, adds new properties to it. 
//  • The value of this is returned.
//ex=
function C() {
    this.a = 37;
}
console.log(C());//undefined 
console.log(new C());//C(a:37) //this is pointing to the new C().

//You can override the return value by returning another object.
//ex=
function C2() {
    this.a = 37;
    return { a: 38 };
}
o = new C2();
console.log(o); // 38 . yaha this jo automatic return ho jata tha wo nai hua hai kyunki usko override
// kar diye object return karke or us object me a ka value assign karke.
//console.log(new C2());//38 ye bhi kar sakte the

//ececution of this in constructor:-
function Person(name, age) {
    //jaise hi new keyword se construvtor banayege to ye 3 chij hoga.
    // this = {} . this ek empty object banayga
    // Object.setPrototypeof(this, Person.prototype). ab wo new keyword se jo object bana hai usko refer karega or 
    //prototype bhi function name(here=person) ko set ho jayga .
    this.age = age;
    this.name = name;
    //uske bad this keyword ko return karega agar hum kuchh return karke override na kare to.
    /* let userHasWrittenReturn = false; 
    if (userHasWrittenReturn) { 
  let return value be user's return value; 
  if (returnValue is object) { 
      return returnValue; 
  } else {
      return this; } 
  } return this;
  matlab: agar hum return likh kar choorde yani undefined return kare ya object type ke alawa kisi
  primitive data type ko return kare to bhi this wala hi return hoga . override nai kar payga */
    // return; // isme this keyword return hoga kyunki yaha return undefined hai
    //return 20;// isme bhi this keyword return hoga kyunki yaha return primitive value  hai
    // return{name:'something'}//is bar ye return hoga this keyword nai kyunki ye object hai
}
console.log(new Person('vishal', 25));
Person.prototype.printName = function () { //person.prototype me naya method add kar rahe hai
    console.log(this.name.toUpperCase());
};
const p1 = new Person('a', 25);
const p2 = new Person('b', 32);
p1.printName(); //ye person.prototype ka method access kar payga kyuki wo iska prototype/parent hai
p2.printName();//person.prototype ka parent Object.prototype hai
console.log(Object.getPrototypeOf(p1) == Person.prototype);//true
console.log(Object.getPrototypeOf(Person.prototype) == Object.prototype);//true
console.log(Object.getPrototypeOf(p1) == Object.prototype);//false kyunki iska prototype change hokar
// person.prototype hp gaya hai kunki constructor use kiye hai

//  A constructor function should be called with new :- agar new lagana bhul gay to jo naya property person ko denge
//  bina new lagaye wo global me set ho jayga jo ki bahut galat hai . usko hum niche ke method se prevent kar
//  sakte hai.
//  1. new.target (pseudo property)
//  • In constructors and functions invoked using the new operator, new.target returns a reference to the constructor
//   or function.
//   • In normal function calls, new.target is undefined.

//   2.use strict
//   3. instanceof :- The instanceof operator tests to see if the prototype property of a constructor appears
//   anywhere in the prototype chain of an object.
//  4. use ES6 class
//EX=
function Person1(name, age) {
    if (!new.target) {
        throw new Error('should use new')
    }
    // 'use strict' //is se undefined milega kyunki this keyword ko undefined set kar dega ye
    this.name = name;
    this.age = age;
}
console.log(Person1('a', 10));//error mil jayga
//EX=
function Person2(name, age) {
    if (!(this instanceof Person2)) {
        throw new Error('should use new')
    }
    // 'use strict' //is se undefined milega unki this keyword ko undefined set kar dega ye
    this.name = name;
    this.age = age;
}
console.log(Person2('a', 10));//error mil jayga. error dekhne ke liye new.target ko comment kar lo.

//  ES6 Classes :-
//  • ES6 classes are "special functions". 
//  • They can be thought of as syntactic sugar to constructor functions.*
// function Rectangle (height, width) {
//     this.height = height;
//     this.width = width;
// } //isko ES6 class me change karte hai
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(Rectangle(25,20));//error mil jayga automatic , manually error throw karne ka need nai hai
//bas yahi fayda hai. error dekhne ke liye uper ke 2 error ko cpmment karo
