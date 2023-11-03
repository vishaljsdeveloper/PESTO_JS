//Chaining of Promises:-
// Chaining of promises mean that the result of one promise will be fed to the next promise(.then). 
//it will go like this= new Promise() resolve (10)=>.then() return 10*2=>.then() return 20*3=>.then() return 60*4
//ek then ka output dusre then ka input banega

//How the Promise returned by then() is settled depends on what its callback does :
//ex=
//P =  asyncFunc1() 
// .then (result1 => { 
//   // Use resultl 
//   // A
// return asyncFunction2(); 
// }) 
// .then (resul2 => { 
//     // Use result2 
//     // B 
// }) 
// .catch(error => {  
//     // Handle errors of 
//     // asyncFunc1() and asyncFunc2()});
// });

//If it returns a Promise (as in line A), the settlement of that Promise is forwarded to P. That's why the callback
// from line B can pick up  the settlement of asyncFunction2's Promise.

//ex=returning a non promise value to then
const fast = (ms) => new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
});
fast(2000)
    .then(() => {
        return 10;
    })
    .then((num) => {
        return num ** 2; // 100 
    })
    .then((num) => {  //yaha argument ko koi or naam bhi de sakte hai lekin tab return me bhi wahi naam dena hoga
        return num / 2; //! 50 
    })
    .then(console.log);

//ex=returning a promise value to then :- jab hum koi promise return karte hai then ko to wo then tab tak
//execute nai hoga jab tak usko return kiya hua promise resolve na ho jaay. isliye isme delay hota hai
//or non promise return karne se fast execution hota hai.
const delay = (mn) =>
    new Promise(function (resolve, reject) {
        setTimeout(() => { resolve(Math.random() * 1000) }, mn);
    });
console.time()
delay(2000)
    .then((val) => {
        console.timeEnd()
        return delay(3000);//ye ab fir se delay function ko run karega jab wo resolve ho jayga to iske niche
        //wale then ko uska value return kar dega
    })
    .then((num1) => {
        console.log('after 5 second')
        return num1 ** 2;
    })
    .then((num1) => {
        return num1 / 2;
    })
    .then(console.log);


//Attaching multiple handlers to the same promise - sab then me same hi result aayga kyunki promise ek bar settled
//ho gaya to dubara resolve ya reject nai ho sakta hai.
const multiple = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.random() * 1000)
    }, 4000);
});
multiple.then((val) => {
    console.log(val);
})
multiple.then((val1) => {
    console.log(val1);
})
multiple.then((val1) => {
    console.log(val1);
})

//solution of the begining question
//q1:-
Promise.resolve(10) //aise bhi simple code likh sakte hai
    .then((x) => console.log(x)) //10 
    .then((x) => console.log(x)) //undefined. kyunki pehla .then jo return karega wo isko value milega. or pehla .then 
    //me hum console.log kar rahe hai or console.log hamesha undefined return karta hai.
    .then((x) => console.log(x));  // undefined.
//q2:-
p = Promise.resolve(10);
p.then((x) => console.log(x)); // 10 
p.then((x) => console.log(x)); // 10 . kyunki yaha hum chaining nai kar rahe hai. promise ek bar settled
// ho jay to usko change nai kar sakte or usme hum multiple handler attach kar sakte hai
p.then((x) => console.log(x)); // 10

// Error handling with promises:-
// A promise can reject by :-
//• by calling the reject function 
//• by throwing inside a then handler or executor function 
//• When a promise rejects, the control jumps to the closest rejection handler. 
//• The execution can continue from that point. matlab .catch ke bad bhi hum .then ko continue kar sakte hai.
//ex= reject use nai kar rahe. throw new error use kar rahe hai
const del = (mn)=>
new Promise(function (resolve, reject)  {
    setTimeout(() => { 
        resolve(Math.random() * 1000) }, mn);
    });


del(2000)
    .then(() => {
        throw new Error();
    })
    .catch((err) => {
        console.log('caught in chain');//del function or 1st then me koi error hoga to ye wala catch pakrega usko.
    })
    .then((el) => {
        console.log(el);
    })
    .catch((err) => {
        console.log('err');//1st wala catch ya uske bad wala then me koi error hoga to ye wala catch pakrega
        // usko kyunki  When a promise rejects, the control jumps to the closest rejection handler. 
    });//agar iske bad ek or .then lagate hai to wo .then jo hai nearest wala uska return value lega kunki 
//last wala catch to execute hi nai hoga. niche ek example me dekhte hai.

//ex=
Promise.reject(1000)
    .catch((x) => {
        console.log(x);//1000
        return 2000;
    })
    .then((x) => {
        console.log(x);//2000
        return 3000;
    })
    .catch((x) => {//ye block execute nai hoga kyunki koi error nai hai to iska return value koi kam ka nai hai.
        console.log(x);
        return 4000;
    })
    .then((x) => {
        console.log(x);//3000 kyunki ye apne se pehle wale .then ka return value lega.
    });

//unhandledRejections:- agar  hum promise ko reject karte hai or usko handle karne ke liye niche catch nai 
//lagate hai to  wo unhandlled reh jata hai jis wajah se hume console me agar window ya node use kar rahe 
//hai to niche diya gaya jaisa error milta hai. sayad isko add karna hota hai promise code ke niche
//1. window.addEventListener('unhandledrejection', function(event{
 //// the event objects two special properties : 
//// [object Promise] - the promise that generated the error 
//alert (event.promise);  
// //Error : Whoops! - the unhandled error object 
// alert (event.reason); 
 //}); 

//// Node 
// process.on('unhandledRejection', (error, promise) => { 
//console.log(error, promise); 
//});
//new Promise (function() {
// throw new Error ("Whoops!"); 
//}); // no catch to handle the error


