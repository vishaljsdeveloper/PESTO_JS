// Promises (aka futures, deferred) :-
//  "A Promise is an object that is used as a placeholder for the eventual results of a deferred/future (and
//  possibly asynchronous) computation.
//  or we can say :- a promise is  An object which represents and manage the lifecycle of a future result.

//lets see how to construct a promise:-
//it is created by using new promise constructor which has one argument which is called as an executer function '()'. 
//this executer function '()' has 2 arguments(which are function) that is resolve and reject.
//ex=
const p = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
})
//consuming code
p.then(() => console.log('after 2 second'));

//we can also write above code like  this. time duration badme de sakte hai
const wait = (ms) => new Promise((resolve, reject) => {//ms me normal function use karna ho to?
    setTimeout(resolve, ms);
})
//consuming code
wait(2000).then(() => console.log('after 2 second'));

//Promise States :-
//• A Promise is always in one of three mutually exclusive states :-
// ■ Before the result is ready, the Promise is :-'pending'.
// ■ If a result is available, the Promise is :-'fulfilled'. 
//■ If an error happened, the Promise is :- 'rejected'. 

//• A Promise is settled if "things are done" (if it is either fulfilled or rejected). it is not in the
//pending state.
// • A Promise is settled exactly once and then remains unchanged.if it is fulfilled then it cant be made rejected
//and vice versa

// A thenable is an object that has a Promise-style then() method.

//ex1=
const p1 = new Promise(function (resolve, reject) {
    resolve(10)
    // reject(new Error('new Erorr is used to throw an error')) //resolve ko comment karke isko bhi check karo
});
console.log(p1);//{fullfilled 10}
//ex2=
const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 1000);
});
console.log(p2);//{pending} kyunki resolve to ek second bad hoga .is tarike se status check kar sakte hai promise ka.

//Consuming Promises:-
//  const p3 = new Promise(function (resolve, reject) { 
//     resolve(10)
//  }); 
//  console.log(p3);//resolve ke andar jo 10 pass kiya hai usko access kaise karoge ? direct promise se 
//nai kar sate, uske liye consuming function/code chahiye hota hai. 

// A Promise object serves as a link between the executor and the consuming functions, which will receive 
//the result or error.
// Consumers can be registered using one of the following methods 
//• .then 
//• .catch 
//• .finally 

//1. .then() :-
//Promise.prototype.then:- Promise.prototype.then(undefined, onRejected) 
//• Takes two function 1.▪onFulfilled 2.▪onRejected
//• The .then is executed only after a promise is setlled. matlab agar hum promise me timeout lagayenge to
//.then() callback tab tak execute nai hoga jab tak promise wala part settled nai ho jata hai.
// The .then always returns a promise jiske wajah se hum chaining kar pate hai.
//ex=
const p4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(30);
        // reject(20);//isko bhi check karo resolve ko comment karke
    }, 2000);
});
p4.then((val) => console.log(`val - ${val}`), //ye resolve wala part hai. yaha normal function bhi use kar sakte hai
    (val) => console.error(`error - ${val}`));//ye reject wala part hai. .then me hi dono ko use kar liye hai. resove 
//ke bad coma lagana hai reject start hone se pehle kyunki dono .then ka argument hai.

//.catch() :- .then me hi error show karne se achha hai .catch ka use karna is se readability badhta hai.
//Promise.prototype.catch :-
//If the promise is rejected, the next nearest .catch is called. 
//• The .catch itself returns a fulfilled promise by default, so you can continue chaining.
//ex=
const p5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve(30); //isko bhi check karo resolve ko comment karke
        reject(20);
    }, 2000);
});
p5
    .then((val) => console.log(`val - ${val}`)) //ye resolve wala part hai. yaha normal function bhi use kar sakte hai
    .catch((val) => console.error(`error - ${val}`));//.then ke bad  semicolon nai lagana hai

//.finally() :- resolve ho ya reject ye to print hoga hi. jo bhi chij hum resolve or reject dono me same print
//karwana chahte use .finally me likhte hai.
//Promise.prototype.finally :-
//When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. 

//ex=
const p6 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(30);
        //  reject(60); //isko bhi check karo resolve ko comment karke
    }, 2000);
});
p6
    .then((val) => console.log(`val - ${val}`)) //ye resolve wala part hai. yaha normal function bhi use kar sakte hai
    .catch((val) => console.error(`error - ${val}`))//yaha se bhi semicolon hatao agar .finally use karna hai to
    .finally(() => console.log('finally'))

//• The finally() method is very similar to calling .then(onFinally, onFinally). 
//ex= .finallu ko .then karke aise bhi likh sakte hai ,resolve or reject ko chain karke same value .then ke dono 
//function me dekar. lekin repeating achha nai hai isliye hum finally use karte hai
const p7 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve(30); //isko bhi check karo resolve ko comment karke
        reject(60);
    }, 2000);
});
p7
    .then((val) => console.log(`val - ${val}`)) //ye resolve wala part hai. yaha normal function bhi use kar sakte hai
    .catch((val) => console.error(`error - ${val}`))//yaha se bhi semicolon hatao agar .finally use karna hai to
    .then(
        () => console.log('finally'),
        () => console.log('finally')
    );

