// A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
// A JavaScript Promise object contains both the producing code and calls to the consuming code. 
// It can be used to deal with Asynchronous operation in JavaScript. 

// Promise State : 
// 1.Pending - Initial State, Not yet Fulfilled or Rejected 
// 2.Fulfilled/Resolved - Promise Completed 
// 3.Rejected - Promise Failed

// A pending promise can either be Resolved with a value or Rejected with a reason (error). 
// When either of these options happens, the associated handlers queued up by a promise's then method are called. 
// A promise is said to be settled if it is either Resolved or Rejected, but not Pending.

//CREATING A PROMISE:-
// Promise () - A Promise object is created using the new keyword and its constructor.
// This constructor takes a function, called the "executor function", as its parameter. 
// This function should take two functions as parameters. 
// The first of these functions (resolve) is called when the asynchronous task completes successfully and 
// returns the results of the task as a value. 
// The second (reject) is called when the task fails, and returns the reason for failure, which is typically 
// an error object. 

// Syntax : - Promise (executor)
//  Syntax : const promiseObj = new Promise ( (resolve, reject) =>{ 
// Do asynchronous operation ;
// resolve(value) ;
// reject(Error) ;
//  })//YE PURA PRODUCING CODE KEHLATA HAI

// A JavaScript Promise object contains both the producing code and calls to the consuming code.

//2nd way of creating a promise: same hai isme ek function return karega promise ko.
//FUNCTION RETURNING A PROMISE.
// function myFunction(){
//  return new Promise( (resolve, reject)=>{

//  } ) 
// }

//CONSUMING CODE (WE CREATE IT USING .then() method):-
//.then() method
// The then() method returns a Promise. It takes up to two arguments : callback functions for the success and failure 
// cases of the Promise. 
// As .then method returns a Promise so we can do method chaining. 

// Syntax : - 
// .then(onResolved, onRejected) 
// onResolved - A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value. 
// onRejected - A Function called if the Promise is rejected. This function has one argument, the rejection reason. 
// //syntax of consuming code.
// promiseObj.then(value => { 
// console.log(value); 
// }, 
// error => { 
// console.log(error); 
// });
//ex=
const promiseObj = new Promise((resolve, reject) => {
    let req = true;
    if (req == true) {
        resolve("Request Success");
    } else {
        reject("Request Rejected");
    }
});

promiseObj.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    },
);
//uper wale code ko promise.Obj nai karke direct .then bhi laga sakte hai:-
// const promiseObj = new Promise((resolve, reject) => {
//     let req = true;
//     if (req == true) {
//         resolve("Request Success");
//     } else {
//         reject("Request Rejected");
//     }
// }).then(
//     (value) => {
//         console.log(value);
//     },
//     (error) => {
//         console.log(error);
//     },
// );

//CHAINING:-
// The then method returns a Promise which allows for method chaining. 
// If the function passed as handler to then returns a Promise, an equivalent Promise will be exposed
//  to the subsequent then in the method chain. 
const promiseObj1 = new Promise((resolve, reject) => {
    let num = 10;
    resolve(num);
}).then((value) => {
    console.log(value);
    return value + 10;
}).then((value) => {
    console.log(value);
});

//catch() method for error/reject handling
// The catch() method returns a Promise and deals with rejected cases only. It behaves the same as 
// calling then(undefined, onRejected). In fact, calling catch(onRejected) internally calls then(undefined, onRejected).
// The catch method is used for error handling in promise composition. Since it returns a Promise, it can be chained
// in the same way as its sister method, then() 
// Syntax : - 
// catch(callback) 
// Where the callback is a function called when the Promise is rejected. This function has one argument 
// error - The rejection error.
//ex=
const promiseObj2 = new Promise((resolve, reject) => {
    let req = true;
    if (req == true) {
        resolve("Request Success");
    } else {
        reject("Request Rejected")
    };
}).then(
    (value) => {
        console.log(value);
    }).catch(
        (error) => {
            console.log(error);
        });

//finally() method :- code resolve ho ya reject ho, dono case me finally execute hoga. yo isme hum aisa
// code likhte hai jo same code .then or .catch dono me hume alag alag likhna parta. basically isme humlog
//code cleanup karne ka code likhte hai jaise koi file open hai to usko close karo etc.

// The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, 
// the specified callback function is executed. This provides a way for code to be run whether the promise was
// fulfilled successfully or rejected once the Promise has been dealt with. 
// This helps to avoid duplicating code in both the promise's then() and catch() handlers. 
// Syntax : - finally(callback)
//ex=
const promiseObj3 = new Promise((resolve, reject) => {
    let req = true;
    if (req == true) {
        resolve("Request yahoo");
    } else {
        reject("Request Rejected")
    };
}).then(
    (value) => {
        console.log(value);
    }).catch(
        (error) => {
            console.log(error);
        }).finally(
            () => {
                console.log('cleaned')
            }
        )

//chain example :-
const promiseObj4 = new Promise((resolve, reject) => {
    let num1 = 10;
    resolve(num1);
}).then(
    (value) => {
        console.log(value);
        return value + 10;
    }).then(
        (value) => {
            console.log(value);
            return value;
        }).then(
            () => {
                throw new Error("Error Found");
            }).catch(
                (error) => {
                    console.log(error);
                });