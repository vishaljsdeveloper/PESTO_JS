//DELEGATION : delegation happens with property. task kisi or se karwana

//Delegation (of Properties) 
//• Reading a property in JS is not a simple operation. 
//In JS, objects are not just containers of key-value pairs. 
//• They have one more very interesting property. They can have a parent. 
//This parent object is also consulted when a property is read., That parent can also have a parent. 
//And that grandparent object is consulted too when a property is read. 
// null <- GRAND PARENT[[Prototype]]<-PARENT...property-value pairs.[[Prototype]]<-OWN...property-value pairs[Prototype]

//• The [[Prototype]] property keeps this reference to the parent object. 
//• It's an internal property which means that we can't access it directly. 
//• An important point to note is that the prototype chain is consulted only while reading a value.NOT while 
//creating, updating or deleting a property.we can say that we have only read access to the parent object and 
//write access is for current object
//• It does not affect addition, updating or deletion of properties on parent objects.

//EXICTENCE CHECK:
//Sometimes we don't care what value a property has. We only want to know whether the given object 
//has the given property or not. There are 2 ways to know that - 
//• in operator 
//• hasOwn Property

//IN PROPERTY:-
const obj = {
    firstName : 'arfat' 
}; 
console.log('firstName' in obj);// ➡ true
console.log('middleName' in obj);// ➡ false 
console.log('isPrototypeOf' in obj); // →> true  hai kyunki iske parent me prototype hai or in pure parent chain
                                     //ko check karta hai

//The syntax is ( 'String (or Symbol)' in objectName)
// • It will evaluate to true or false depending on whether the property exists. 
//Just like Reading a property, the entire prototype chain is consulted before true or false is returned. 
//If the property is found at any level, true is returned.   

//hasOwn Property 
//• It's a function that can be accessed through an object because of prototypes. 
//It takes string key name (or symbol) as an argument. YE BAS CURRENT OBJECT ko check karega EX=
const obj1 = { 
fName : 'arfat', 
}; 
console.log('toString' in obj1); //true
console.log(obj1.hasOwnProperty('toString'));//false kyunki ye bas current object me check karega uske parent me nai
console.log(obj1.hasOwnProperty('fName'));// true iske naam me hi OWN hai to bas current object me check karega