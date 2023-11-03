//iterators:-
//Iteration :- • JS has a new looping construct in ES6, for-of. You use it to iterate over a collection of items.
//for-of allows iteration over many kinds of structures, not just lists.
//for-of loop is also used to iterate over map and sets.
//ex=
const map = new Map([
    [65, 'A'],
    [66, 'B'],
    [67, 'C'],
]);
for (const [key, value] of map) {
    console.log(key, value);
} // 65 A // 66 B // 67 C
//for-of loop is also used to iterate each character of string. we have seen this in yahooiterators.js
//if we use emojis as a string then simple for loop will not work but for-of loop will work.

//Spread and Rest operators (in ES6) :-
const map1 = new Map([
    [65, 'A'],
    [66, 'B']]);
const [[key, value], secondEl] = map1; //array destructuring
console.log({ key, value, secondEl }); //output : {key: 65, value: 'A', secondEl: Array(2)}
console.log(...map1); //using rest/spread operator .output:-  [65, 'A'] [66, 'B']

//Iterators :-
//• An iterable is an object that has an Symbol.iterator method which returns an iterator. 
//• Iterators are objects with next() defined. They 
//■ return the next value in the iteration 
//■ remember the state during iteration. 
//■ update the state to point at the next value
// ■signal when it is done when done is true.
//ex=
str= 'vishal singh';
iter =str[Symbol.iterator]();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
last = iter.next()
console.log(last.value)// jisko man na kare use nai bhi print kar sakte hai
console.log(iter.next())

//Iterables:-  
//ES6 introduces a new mechanism for traversing data : iteration. Two concepts are central to iteration :-
//• An iterable is a data structure that wants to make its elements accessible to the public. It does so by 
//implementing a method whose key is Symbol.iterator. That method is a factory for iterators. 
//• An iterator is a pointer for traversing the elements of a data structure (think cursors in databases). 
//The following values are iterable : Arrays - Strings Maps Sets - DOM data structures (work in progress)

