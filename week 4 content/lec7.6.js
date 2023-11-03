//Promise Helper Function (Aggregate operation on promise :- they work on collection of promise) :-
//1. Promise.all:- agar sara promise fullfilled ho jata hai to .then ko execute karega ya jo bhi sabse pehle
//reject hoga to .catch ko execute karea. har promise background me alag alag execute hoga or jo promise 
//maximum time le raha hai utna time lagega execute hone me.
// 'all' lets you know when either all input promises have fulfilled or when one of them rejects.
// An already resolved Promise if the iterable passed is empty. 
//• An pending promise when the iterable contains a promise.
//ex=
function delay(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}
console.time();
Promise.all([delay(2000, 'a'), delay(3000, 'b'), delay(4000, 'c')])//sabko execute hone me total time
    // 4 second lagega kyunki wo hi maximum time hai

    //.then(console.log)
    .then((val) => {
        console.log(val);// [a.b.c]
        console.timeEnd()
    }//4 second
    );

//ex2=
function delay1(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}
Promise.all([
    delay1(2000, 'a'),
    Promise.reject('this is rejected'),
    delay1(3000, 'b'),
    delay1(4000, 'c')
])//ye within
    //few fraction of second me execute hokar .catch wala function execute kar dega kyunki isko reject milte hi ye baki sabko
    //chhor kar .catch me chala jayga.  .then execute hi nai hoga
    .then((valu) => {
        console.log(valu);
    })
    .catch((err) => {
        console.log('error because', err);
    })

//Promise.race :-it gives the first settlement. ye bhi iterable lega jisme bahut sara promise
//.  hoga(isme non promise bhi ho sakta hai) jo promise sabse kam time me execute 
//hoga wo .then ke output me chala jayga matlab wo race win kar lega baki sab execute nai hoga. agar reject
// ka promise win karta hai to wo .catch me chala jayga or .then execute hi nai hoga.
//basically sare promises me se jo sabse pehle settled ho jayga wo race jit jayga.

//It takes an iterable over Promises (thenables and other values are converted to Promises via Promise.resolve()) and
// returns a Promise P. 
//• The first of the input Promises that is settled passes its settlement on to the output Promise. 
//• If iterable is empty then the Promise returned by race() is never settled.
//ex=
function sleep(ms, val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val)
        }, ms)
    })
}
Promise.race([
    sleep(2000, 'val1'),
    sleep(2500, 'val2'),
    //Promise.reject('rejected')//isko uncomment karenge to ye race jitega
])
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log('this is catch', err);
    });

//use case of promise.all :- jab hum nrtwork request karke kuchh fetck karte hai to usko promise.race me daal 
//sakte hai. promise.race me 2 array element dalenge. pehla element fetch karne ka or dusra agar 5 second me 
//fetch nai hota hai to timee out show kRar do.
// Promise.race ([ httpGet('http://example.com/file.txt'),//5 second me ye ho jata hai to thik
//  delay(5000).then(function () { throw new Error('Timed out') //nai to 5 second bad error throw kar denge
// }) 
// ]) 
// .then(function (text) { })
// .catch(function (reason) { });

//Promise.allSettled :- promise.allSettled hame sare settled promise ka value deta hai chahe wo resolve ho
//ya reject na ki promise.all ke jaisa ya to sab resolve ho jay to ya jo sabse pehle reject ho jay uska.
//promise.all settled sare settlement ka value deta hai irrespective of resolve and reject.

//The Promise.allSettled() method returns a promise that resolves after all of the given promises have 
//either settled, with an array of objects that each describes the outcome of each promise.
//ex=
Promise.allSettled([Promise.resolve('a'), Promise.reject('b')])
    .then(console.log);//ye array return karta hai

//Promise.any :-ye agar ek bhi promise resolve ho jata hai to usko show karega. agar ek bhi resolve nai hota hai
//to jitna bhi total promise reject hua hai wo sabko show karega. promise. all ka ulta lag raha hai kyunki usme sare
//fullfilled ya first rejection ko show karta tha or yaha 1st fullfilled ya all rejection ko shoe karta hai.

//ex=
function sleep1(ms, val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val)
        }, ms)
    })
}
const perr = new Promise((resolve, reject) => {
    reject('always rejects')
})
Promise.any([perr]).catch((err) => {
    console.log(err);//output= AggregateError: All promises were rejected
    console.log(err.errors);//output jo reject ke andar reason likhoge wo= always reject
})
//ex2= using above 2 promises
Promise.any([perr, sleep1(2000, 'vishal')])
    .then((val) => {
        console.log(val);//vishal kyunki pehle check karega ki kya ek bhi fullfilled ho raha hai
    })
    .catch((err) => {
        console.log(err);
    });
//ex3=
Promise.any([perr, perr,]).catch((err) => {
    console.log(err);//output= AggregateError: All promises were rejected
    console.log(err.errors);//output jo reject ke andar reason likhoge wo= always reject, always reject
})//agar isme bhi sleep1 promise lagayenge to wo execute hoga .uske liye .then lagana hoga
//note :- promise.any abhi 2021 me launch hua hai to ye sab machine me available nai hoga.
