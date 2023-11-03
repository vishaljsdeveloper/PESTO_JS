//Property Attributes and Descriptors :-
//• Property attributes are the atomic building blocks of properties. 
//• A property descriptor is a data structure for working programmatically with attributes. 
//Property Attribute :-
//• Every key of an object contains a set of property attributes that define the characteristics of the value 
//associated with the key. 
//• They can also be thought of as meta-data describing the key-value pair.
//In short, attributes are used to define and explain the state of object properties.

//Accessing Property Attributes :-
//We can use the function Object.getOwnProperty Descriptor/s to get that information.
//ex=
obj = {
    a: 56,
}
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));//accessing the property attribute of property 'a'

obj1 = {
    b: 87,
    c: function () { },
    d: 43,
};
console.log(Object.getOwnPropertyDescriptors(obj1));//object ke har property ka property attribute dega. yaha bas 
//descriptor me s extra laga hai

//A "data property" associates a key value with the following attributes. 
//1.[[Value]] :- The value retrieved by a get access of the property. 
//2. [[Writable]] :- If false, attempts to change the property's [[Value]] attribute will not succeed. 
//3.[[Enumerable]] :- If true, the property will be enumerated by a for-in enumeration. 
//4.[[Configurable]] :-If false, - attempts to delete the property, - change the property to be an accessor property from data property or
//vice versa, - or change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.


//An accessor property associates a key value with the ► attributes -- 
//[[Get]] :-The value is either a function or undefined(if getter is not defined only set is defined). 
//[[Set]] :-The value is either a function or undefined(if setter is not defined only get is defined). 
//[[Enumerable]] :-If true, the property is to be enumerated by a for-in enumeration. Otherwise, the property
// is said to be non-enumerable. 
//[[Configurable]] :-If false, attempts to delete the property, change the property to be a data property, 
//or change its attributes will fail.

/*So in total, there are six property attributes. 
All properties have these common attributes 
• [[Enumerable]] 
• [[Configurable]] 
All Data Properties have 
• [[Value]] 
• [[Writable]] 
All Accessor Properties have 
• [[Get]] 
• [[Set]]
*/

//How to set/modify a property attribute? we can do this using :- Object.defineProperty/s
//ex=
'use strict';
const obj2 = {};
//!e, w, c = true 
obj2["newprop"] = 'some value';
//!e, w, c = false 
Object.defineProperty(obj2, 'name', { //  use for updation + creation 
    value: 'salman',
    enumerable: true,
    writable: true,
    configurable: true
});
console.log(obj2);//enumerable false rahega to nai dikheha name property. 
console.log(obj2.name);//enumerable false rahega to bhi aise access kar sakte hai name property. 
obj2.name = 56; //writable false rahega by default to nai change kar sakte value
console.log(obj2.name);
console.log(delete obj2.newprop);//configurable false rahega to nai kar sakte delete
console.log(obj2);