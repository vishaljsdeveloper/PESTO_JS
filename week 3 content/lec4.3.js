// ITERATION IN OBJECT 
// • Often times you want to process the set of all values or keys and create another object with transformed values 
// or key names. 
// • Unlike arrays, you can't simply iterate an object. 

// Popular Methods To Iterate an Object :-
//  • for-in loop 
//  • Object methods :-
//        ▪keys  
//        ▪values
//        ■ entries 
//  •Reflect.own

//FOR - IN LOOP:-
const arr = [1, 'b', 3];
const obj = {
    name: 'pesto',
};
for (let key in obj) {
    console.log(key);//YE BAS KEY PRINT KAREGA 
    console.log(key, obj[key]);// YE KEY OR USKA VALUE DONO PRINT KAREGA
}
//NOTE : obj[key] = MEMOIZATION ME BHI YAHI USE HUA THA.OBJECT KO DYNAMICALLY READ AND CREATE KE LIYE USE HOTA HAI
//for in loop me array ko ke element ko bhi print kar sakte hai:-
for (let key in arr) {
    console.log(key, arr[key]); //key = index of array . arr[key]=elements of array
}
//• The order of appearance of properties (may) not fixed in an object. 
//• for-in loop will return all string properties. It won't give Symbol properties. 
//Note : It is not recommended to use this method because we know about object delegation. matlab ki for in loop
//delegation ke karan object ke parent object ko bhi iterate kar dega. symbol me jo property hoga usko
//  iterate nai karega  EX=
const parent = {
    name: 'parent', //Enumerable 
    xyz: 'abc', // Enumerable 
}
const obj2 = {
    lastName: 'something',
    [Symbol()]: 23,
};
Object.setPrototypeOf(obj2, parent); //obj2 ka prototype parent set kar rahe hai
for (let key in obj2) {
    console.log(key);//sy
}
// console.log(obj.name);

//OBJECT METHODS: Object.keys() :- Object ka O capital hai. ye bas key dega lekin value nai.
//Object.keys() parent ke property ko iterate nai karta hai. ye bhi symbol property ko iterate nai karta hai.
const parent3 = {
    name: 'parent', //Enumerable 
    xyz: 'abc', // Enumerable 
}
const obj3 = {
    lastName: 'anything',
    last: 'vishu',
    [Symbol()]: 23,
};
Object.setPrototypeOf(obj3, parent3); //obj3 ka prototype parent3 set kar rahe hai
const key = Object.keys(obj3);
// iterate only string keys not symbol
// Does not climb up to the parent object. ye array ke form me return karta hai
console.log(key, obj3[key]);//key= property key. obj3[key]=property value jab ek property tha to show
//  kar raha tha.. ek se jada me show nai kar raha hai kyunki ye bas key show karne ke liye hota hai
//kyunki ye array return karta hai to hum isme array ke methods or property laga sakte hai.
key.forEach((keys) => console.log(keys));// ek ek karke element ko de dega. aise bhi iterate kar sakte hai

//OBJECT METHODS: Object.values() :- Object ka O capital hai. ye bas value dega lekin key nai.
//Object.values() parent ke property ko iterate nai karta hai. ye bhi symbol property ko iterate nai karta hai.
const parent4 = {
    name: 'parent', //Enumerable 
    xyz: 'abc', // Enumerable 
}
const obj4 = {
    lastName: 'whateverthing',
    last: 'vishnu',
    [Symbol()]: 23,
};
Object.setPrototypeOf(obj4, parent4); //obj4 ka prototype parent4 set kar rahe hai
const values = Object.values(obj4);//kyunki ye array return karta hai to hum isme array ke methods
// or property laga sakte hai. internally=[value1,value2,....valueN]

values.forEach((value) => { console.log(value); });//ek ek karke values arary ka element dega.
console.log(values);//ye bhi kar sakte hai. output = [value1,value2,....valueN]
//Object.values() has similar restrictions as Object.keys(), but it returns an array of values instead of the keys.

//OBJECT METHODS: Object.entries() :- Object ka O capital hai. ye key or value dono dega.
//Object.entries() parent ke property ko iterate nai karta hai. ye bhi symbol property ko iterate nai karta hai.
const entries = Object.entries(obj4);//kyunki ye array return karta hai to hum isme array ke methods
// or property laga sakte hai. internally=[[key1,value1],[key2,value2],....[keyN,valueN]];
entries.forEach((index, entry) =>{console.log(index,entry);});//we can also use destructuring here . watch video
console.log(entries);//ye bhi kar sakte hai. output=[[key1,value1],[key2,value2],....[keyN,valueN]];

//OBJECT METHODS :-Reflect.ownKeys() : ye symbol bhi iterate karega. ye bas key dega.
//Reflect.ownKeys() :- • ownKeys return both string-based and symbol properties. 
//• Note that we are using Reflect module, and not Object module. islie isme object nai laga hai pehle.
console.log(Object.keys(obj4)); //bina store kiye console kar sakte hai
console.log(Reflect.ownKeys(obj4)); // ye symbol bhi return kar raha hai.I
console.log(Object.keys(Object.prototype));//Object.prototype = default object prototype ka jo bhi property hai wo.
//Object.keys me show nai karega kyunki ye property non-enumerable hai or Object.keys non-enurable property ko show 
//nai karta hai. 
 console.log(Reflect.ownKeys(Object.prototype));// ye non enumerable property ko show karega. 