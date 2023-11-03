//Protecting Objects :-
//There are three levels of protection an object can have, listed here from weakest to strongest : 
//• Preventing extensions 
//• Sealing 
//• Freezing 
//1. Preventing Extensions :-
//Object.preventExtensions(obj) makes it impossible to add new properties to obj. 
//You check whether an object is extensible via : Object.isExtensible(obj)
//ex=
'use strict'; const obj = {
    a: 1,
    b: 2,
};
Object.preventExtensions(obj); //preventing from creating new properties
//! Modification/updation is allowed
obj.a = 10;
console.log(obj);
//! Deletion is allowed
delete obj.a;
console.log(obj);
console.log(Object.isExtensible(obj));//false
//creation is not allowed 
//obj.c = 5; //output : Cannot add property c, object is not extensible. comment kar raha hun
// taki niche ka code execute ho sake.
//console.log(obj);

//2. Sealing :-
//The seal method seals an object. It means - 
//• It prevents new properties from being added just like Object.preventExtensions. 
//• It marks all existing properties as non configurable.means you cant delete a property
//• Values of present properties can still be changed as long as they are writable. 
//• MAIN POINT :- In short, it prevents adding and/or removing properties.

//You check whether an object is sealed via : Object.isSealed(obj)
//ex=

const obj1 = {
    id: 42,
    sex: 'male'
};
Object.seal(obj1);
//deletion is not allowed
//delete obj1.id; // (does not work) comment kar raha hun taki niche ka code execute ho sake.
//creation is not allowed 
//obj1.name = 'Arfat'; // (does not work). comment kar raha hun taki niche ka code execute ho sake.
console.log(obj1); //→> {id : 42 , sex:male} 
console.log(Object.isExtensible(obj1)) // false 
console.log(Object.isSealed(obj1)); //→> true
//modification/updation is allowed
obj1.id = 56;
console.log(obj1);

//freeze:-
//Object.freeze:- freeze is the maximum protection any object can have in JavaScript. 
//It seals the object using Object.seal 
//• It also prevents modifying any existing properties at all. 
//• It also prevents the descriptors from being changed as the object is already seated.
//matlab bas read only reh jayga

//You check whether an object is frozen via : Object.isFrozen(obj)
//ex=
const obj2 = {
    myid: 42,
    mysex: 'male'
};
Object.freeze(obj2);
//deletion is not allowed
//delete obj2.myid; // (does not work) comment kar raha hun taki niche ka code execute ho sake.
//creation is not allowed 
//obj2.name = 'Arfat'; // (does not work). comment kar raha hun taki niche ka code execute ho sake.
console.log(obj2); //→> {myid : 42 , mysex:male} 
console.log(Object.isExtensible(obj2)) // false 
console.log(Object.isSealed(obj2)); //→> true
console.log(Object.isFrozen(obj2));
//modification/updation is not allowed
// obj2.myid = 56;
console.log(obj2);
