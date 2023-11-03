// JavaScript is a prototypal language 
// • Classes are not present, class key word is present in ES6 not actual class like Java
// • Not traditionally Object Oriented 
// • Everything is public* , we have modifier now for private and protected
// • Objects inherits from another objects unlike java where class inheit from class

// What is a Prototype? 
// A prototype is a working object instance. 
// There are two prototypes in JS 
// • Prototype Object on Functions 
// • Object prototypes (aka prototypes of objects) :-
// Every object is born referencing to a prototype object(parent) by a secret property [[Prototype]] or _proto_.
//  Even when you don't specify the prototype, a default prototype is set for every object.
//ex=
const obj = {};
console.log(obj.toString);//output= [Function: toString]
console.log(obj.hasOwnProperty);//output= [Function: hasOwnProperty]
//obj ke pas ye property nai hai fir bhi ye access ho raha hai jabki undefined aana chahiye tha. ye sara property
//  obj ke parent ke pas hai or delegation ke wajah se hum uske parent ke property ko access kar pa rahe hai.
//obj ka parent obj ka prototype hai.

// Prototype-based programming 
// • Prototype-based programming is a style of object oriented programming in which behaviour 
// reuse (aka inheritance) is performed via a process of reusing existing objects via delegation 
// that serve as prototypes. 
// • This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming. 
// • Delegation is the language feature that supports prototype-based programming.

// Prototype Chains
//  • The prototype relationship between two objects is about inheritance. 
//  • An object specifies its prototype via the internal property [[Prototype]] 
//  • Every object has this property, but it can be null. 
//  • The chain of objects connected by the [[Prototype]] property is called the prototype chain.

const obj1 = {
    toString() {
    },
};
console.log(obj1.toString);//if we create any property in obj1 that it is available in its parent/prototype then 
//it will override the property of its prototype because obj1 will first search for the property in his 
//own scope and if not found then it will climb to its parent/prototype untill its reach the null .
console.log(obj1.hasOwnProperty);

//  Reading a property (rough algorithm on how a property is accessed):-
//   Goal : Read middleName from the object obj. (Note that middleName does not exist in obj)
//   • let current obect= obj.
//   Let middleName= CurrentKeyName,
//   • Let CurrentObject CurrentKeyName
//   • If CurrentObject return associated = has value.
//   • Else, let CurrentObject = parent of CurrentObject.
//   Check for CurrentKeyName again in CurrentObject. If found, return value.
//   • If Current Object has no parent and does not have CurrentKeyName, return undefined.

//Create, Update, Delete a property
//• When you do changes to a property of an object, it always affect the current object only.it wont
// have any effect on its prototype/parent.
// ■ If the property doesn't exist, property is added to the object.
//  • It won't look up to the prototype chain.