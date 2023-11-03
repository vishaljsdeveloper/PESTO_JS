// Accessing the Prototype:-
// 1. Object.getPrototypeof :-
const prototype1 = {
    name: 'prototype1'
};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1));
console.log(Object.getPrototypeOf(object1) == prototype1) // expected output : true ,prototype1);

//2. reflect.getPrototypeOf :- same hi hai Object.getPrototypeOf ka. bas ye reflect module ka hai or ES6 ka hai or
//wo Object module ka hai or ES5 ka hai. behaviour same hai dono ka. 
//This method is almost the same method as Object.getPrototypeOf
console.log(Reflect.getPrototypeOf(object1));
console.log(Reflect.getPrototypeOf(object1) == prototype1) // expected output : true ,prototype1);

//3. isPrototypeOf() : ye true or false batayga. ye static methoda nai hai jo object module me available hota hai,
//ye instance method hai kisi bhi object ka.
console.log(prototype1.isPrototypeOf(object1));//true
console.log(object1.isPrototypeOf(prototype1));//false kyunki ye child hai prototype1 ka na ki parent/prototype

//4. __proto__ (dundur proto ot doubleunderscore proto) . this method is not recommended as it is not supported by 
//all browser.
console.log(object1.__proto__);

// Modifying existing prototypes:-
// 1. Object.setPrototypeof() :-
// The Object.setPrototypeof() method sets the prototype (i.e., the internal [[Prototype]] property) of a 
// specified object to another object or null. 
//  Object.setPrototypeof(obj, prototype) 
//ex=
const obj = {
    getNumber() {
        return 42;
    }
}
const child = {};
Object.setPrototypeOf(child, obj);// now child object can access the property of obj
// Object.setPrototypeOf(child, null); // we can also set the prototype of object = null . object will become
// prototypeless. it wont be able to use properties of its prototype like toString() etc. isk deletion of 
//prototype bhi bolte hai but asli me delete nai kar sakte hai bas isko set kar sakte hai null me
console.log(child.getNumber()); //42
// 2. _proto_  :- NOT RECOMENDED
//  const shape = {}; 
//   const circle = {} 
//    Set the object prototype. 
// DEPRECATED. This is for example purposes only. 6
// DO NOT DO THIS in real code. 
// shape.__proto__ = circle;
//ex=
const child1 = {};
child1.__proto__ = obj;//42
console.log(child1.getNumber());

//Creating an object with a new prototype WITH Object.create() :- prototype set karne ki jagah naya prototype
//bana rahe hai ek naya object bana kar.
// • Whenever you access a property via obj, JavaScript starts the search for it in that object and continues 
// with its prototype, the prototype's prototype, and so on. 
// •a property in an object overrides a property with the same key in a "later"/prototype object : the former 
// property is found first.
//ex=
var proto = {
    describe: function () {
        return 'name : ' + this.name;
    },
    subject: 'java',
};
// Create a new object whose prototype is "proto 
var obj3 = Object.create(proto);
obj3.name = 'obj3';
console.log(obj3); //isme describe method nai aayga but use hum access kar sakte hai. read only.
console.log(obj3.describe());//name:obj3
console.log(obj3.subject);//java
obj3.subject = 'python';
console.log(obj3.subject);//overriding . ab java nai dikhega kyunki pehle obj3 ko access karega agar waha nai 
 //mila property to apne prototype ke pas jayga. lekin isko yahi mil gaya to ab aage nai jayga prototype par



