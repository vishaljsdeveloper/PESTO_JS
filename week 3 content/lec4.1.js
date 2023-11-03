//OBJECTS :-
//Everything in JS is an object Except the primitives .
//Anything that is not a primitive value is an Object. That includes arrays, functions, and objects themselves.
// we all them objects because we can perform all the action on them that we perform on an object.action=CRUD oper.

//An object is a collection of properties .A property is a named container for a value w/ some additional attributes
//The name of a property is called a key; thus, an object can be considered as a collection of key-value pairs.

//Properties • all objects in JavaScript are maps (dictionaries) from strings to values.
//A (key, value) entry in an object is called a property. The key of a property is always a text string (ES5), in 
//ES6 it can be a symbol. 
//• 3 Kinds of Properties 
//• Properties (or named data properties) 
//• Accessors (or named accessor properties)  we will see later
//• Internal properties ▪ Exist only in the ECMAScript language specification.we will see later

//Creation of Objects:-
// 1.  Literal Notation : const obj = { }; // Creating an object using literal notation
//ex=
const obj = { 
firstName : 'Alex', 
lastName : 'Martin', // Using string quotes 
dateOfBirth : '18th October', 
friends : ['Bob', 'Christine'],
 } ;

 //• An object property name can be any valid JavaScript string, or anything that can be converted to a string,
 // including the empty string. • The values can be any value type. • The nesting of objects can be arbitrary 
 //and cyclic(cyclic= object ke property me wahi object ko as a property ke value ke rup me use karna) too!


// 2.  Object Constructor :
const obj1 = new Object (); 
obj1.name = 'arfat' 
// • This effect of this code and the literal notation is the same. 
// • However, it is advised not to use this pattern.
// 3. Object.create 
const newobj = Object.create(Object.prototype);//ye prototype koi or object ya function bhi ho sakta hai jisko
                                               // newobj access karega.
newobj.name = 'arfat' 
// • This lets you specify the "prototype" of an object at the time of definition.

//Function as key values :-
//• In an object, when we have a function as a value to a key, then the function is called a method.
//This is one of the most important features of objects.
// The methods have access to the key-value pairs of the object.
//EX=
const obj2 = { 
    fName : 'ALEX', 
    lName : 'MARTIN',
    printFullName() { 
        return this.fName + ' '+this.lName 
    }, 
}; 
console.log(obj2.printFullName()); //=> "ALEX MARTIN"

//Accessing Properties:-
// Dot Notation  jane.name // 'jane' 
//Bracket Notation  jane ['desc.fun]//desc.fun ya 9,8 ye sab ko dot notaion se access nai kar payenge.
//Note : Accessing non-existing properties give "undefined'

//ADDING AND UPDATING PROPERTIES:-
var jane = { 
    name : 'Jane', 
    'desc.func' : function () { 
        return 'Person named' + this.name; 
    },
}; 
jane.name = 'JANE'; // updated jane
jane['desc.func'] = 20; // updated 
jane.nothing =30; // added to the object 
console.log(jane.name); 
console.log(jane['desc.func']);
//An object can only contain a single key with one value. 
//• Using the dot-notation, you can't use property names that are numbers, or string that contain spaces, or 
//special character, symbols, or dynamic properties.

//Deleting Properties :- Deletion is performed using the delete operator. Again, we can use both the notations.
//1.  delete obj.firstName; 
//2. delete obj['firstName'];// =>true
//  Note : The return value of delete operator is true if the property was successfully deleted. Else, it will be false.
//EX=
var mane = { 
name : 'mane', 
'lesc.func' : function () { 
return 'Person named' + this.name}, 
}; 
console.log(delete mane.name); 
console.log(mane); 