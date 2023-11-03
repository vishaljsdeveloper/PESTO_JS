//Call back :-ek bar fir dekhna
//callback suffers a lot of disadvantage specially when perform an input/output based operation
//javascript is single thraded language. problem with single threaded language is this if you make a 
//network request then you have to wait till responds come to do the further exexution. this is what we 
//called blocking. a user cant to anything else untill the response came back.
//isko tacle karne ke liye asynchronous programming karte hai jisme baki code execute hota rehta hai or 
//network request background me chalta rehta hai, jab request complete ho jata hai to wo execute ho jata hai.
//isi asynchronous technique ko non-blocking kehte hai. I/O operation me non blocking execution must hai.
//generally code is synchronous unless we perform an I/O operation with network request.

//A Primer :-
//• Javascript is single-threaded 
//• Code is generally synchronous 
//• Javascript interprets each line right away befor moving on to what's next 
//• I/O Code is expected to be non-blocking
//ex of non blocking=
console.log('start');
setTimeout(() => {
    console.log('middle');
}, 0);
console.log('end');

//ex2=
// const fs = require('fs');
// console.log('start');
// fs.readFile(_filename, (err, data) => {
//     console.log(`data - ${data)`);
// });
// console.log('end');//fs.readfile bhi callback lega settimeout jaisa matlab last me print hoga.

//Using Callbacks
//• By default, async in JS is all about callbacks.
//• Callbacks get an otherwise blocking long-lived function out of the loop. They're the exception sequential,
// 'blocking' execution.
//Callbacks don't return values, they have *side-effects*
//note:-I/O operation me network request hota hi hai. jaise server se image lena, email bhejna code se etc.
//when many callback nesting happens it is called as callback hell or pyramid doom.

//Disadvantages of Callbacks :-
//• Readability :- ■ Pyramid of Doom/ Callback Hell
//• Complexity :- ■ Non-sequential exeution
//• Debugging :- ■ The callback is executed much later so the stack trace is different.
//Loss of control flow :- ■ return does not return to the parent function
//• Loss of error handling :- ■ Exception won't be caught by the parent function
//• Sync/Async Ambiguity
//• Harder to compose and modularization :- ▪ No Chaining
//note:- promises will overcome this disadvantages

