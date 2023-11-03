//Symbols :-
//• Symbols are a new primitive introduced in ES6. Just like the Number, String, and Boolean primitives. 
//• Symbols have a Symbol function which can be used to create them. 
//• The only way to make a Symbol is with the Symbol function
let sym = Symbol();
let sym2 = Symbol('this is description parameter used for debugging');
console.log(sym, sym2);
//new Symbol(); // TypeError : Symbol is not a constructor
console.log(typeof sym);//symbol. as it is a primitive data type

//Why Symbols? :-
//• Symbol value or just a Symbol is guaranteed to be unique.sym3 is not equal to sym4 
//• Symbols are often used to add unique property keys to an object that won't collide with keys any other 
//code might add to the object, and which are hidden from any mechanisms other code will typically use to access 
//the object. 
//• That enables a form of weak encapsulation, or a weak form of information hiding. kyunki isko primitive way of
//object access se access nai kar sakte to ye ek type ka encapsulation(shield) provide karta hai lekin ye weak
//encapsulation hota hai kyunki isko bhi access kiya ja sakta hai dusre tarike se.to iske madad se hum private 
//keys bana sakte hai jo asli me private nai hoga lekin private jaisa hi hoga.
let sym3 = Symbol();//accessible only in this module/realm
let sym4 = Symbol();
let a = Number('9');
let b = Number('9');
console.log(sym3 === sym4);//false. every symbol is unique 
console.log(a === b);//true 
console.log(sym3 === sym3);//true . symbol is only equal to itself
let obj = {
    name: 'arfat'
};
obj[sym3] = 42;
console.log(obj[sym3]);
console.log(Object.keys(obj));//bas name milega  key me sym3 nai kyunki symbol primitive object access method se
//access nai kiya ja sakta jaise for in loop , for of loop,object.entries etc.

//abhi tak jo hum symbol banaye hai wo local symbols tha matlab bas ek hi module/realm/sayad file  me hum usko use kar sakte hai.
//isko dusre module me import nai kar sakte hai. symbol ko import karne ke liye hume use global bana na parta hai.

//Global Symbol Registry :-
//Symbols have individual identities and thus don't travel across realms as smoothly as other primitive values. 
//• That is a problem for symbols such as Symbol.iterator that should work across realms : If an object is 
//iterable in one realm, it should be iterable in all realms like all other primitive value does.
//*If a library wants to provide cross-realm symbols, it has to rely on extra support, which comes in the form 
//of the global symbol registry .
//• This registry is global to all realms and maps strings to symbols. You ask the registry for a symbol
// via Symbol.for() and retrieve the string associated with a symbol (its key) via Symbol.keyFor() :
//ex=
//let sym5= Symbol.for('k1'); //Symbol.for is use to crate  a global symbol. k1 is its key which will return
// the symbol
//module.exports ={ 
 //   sym5, };//ye pure code ko 2.js file me likho.

 //const { sym5} = require('./2'); 
 //console.log(sym5);
 //console.log(Symbol.keyFor(sym5))//output=k1, ye tino line of code ko 1.js file me likho. ab ye export. 
 // ho chuka 1.js module me ab hum ise yaha bhi use kar sakte hai.
 //console.log(sym5===sym5)//true because symbol is equal to itself.
 //console.log(sym5===Symbol('k1'));//true because symbol is equal to itelf.
 //console.log(sym5===symbol());//false because symbol() generates a new symbol and sym already exist.

 //Characteristics of Symbols :-
 //• Symbols will never conflict with Object string keys. This makes them great for extending objects 
 //you've been given (e.g. as a function param) without affecting the Object in a noticeable way. 
 //•Symbols cannot be read using existing reflection tools like for in loop , object.keys. 
 //• Symbols are not private. weak encapsulation provide karta hai lekin asli me private nai hota hai 
 //• Symbols are not coercible into primitives. matlab isko string ya number me convert nai kar sakte.
//• Symbols are not always unique(.for). matlan isko cross realm/module me use kar sakte hai.

//Well Known Symbols :-
//The global object Symbol has several properties that serve as constants for so called well-known symbols. 
//These symbols let you configure how ES6 treats an object, by using them as property keys. 
//Symbol.hasInstance(isme other object bhi de sakte hai video me dekhna) :override instanceof property
//• Symbol.match :override string.match property
//• Symbol.replace: override string.replace property
// Symbol.iterator : override for of loop
class A  {
    static [Symbol.hasInstance]() { 
    console.log('Symbol.hasInstance called'); 
    return false; //ek static method banaye hai hasInstance(jo instance of ko override karta hai) ki madad
    //se or usme return false kar diye hai.
} 
}; 
let c = new A(); 
console.log(c instanceof A);//agar uper ka static method hata denge to ye true ho jayga.
const myname ='vishal';
let myname1=myname;
myname1='danish';
