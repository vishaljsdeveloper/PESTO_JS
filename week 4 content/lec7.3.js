//You can attach handlers to settled promises later.
// The consumer callbacks do not have to be attached at the moment of Promise construction. hum.then handler ko
//bhi settimeout karke badme attach kar sakte hai kyunki ek bar promise settled(reolve or reject) ho jata hai
//uske bad uska state change nai ho sakta hai matlab na to wo fir se resolve hoga or na hi reject.

//ex= adding attach handler immedietly:-
let promise = new Promise((resolve) =>
    setTimeout(() => resolve('done!'), 1000)
).then(console.log);

//ex= adding attach handler later:-
let promise2 = new Promise((resolve) =>
    setTimeout(() => resolve('done yes!'), 1000)
);

setTimeout(() => {
    promise2.then((val) => console.log(val))
}, 2000);

//solution of the question that was shown at the beginning of the slide
//q1=
p = new Promise((resolve, reject) => {
    resolve(10); //ye execute hote hi promise settled ho jayga to iske bad hum uska state change nai kar sakte
    // chahe wo resolve ho ya reject. isliye niche wala 2nd resolve work nai karega 
    resolve(20);
}).then(x => console.log(x)); // 10

//q2
p1 = new Promise((resolve, reject) => {
    reject(`rejected and value is 50`); //a settled promise cannot be resolved or reject later. isliye baas ye execute hoga
    reject(20);//it will no execute as promise is settled earlier and it cant be settled more than once.
}).catch(x => console.log(x));

//q3
p2 = new Promise((resolve, reject) => {
    resolve(100); //a settled promise cannot be resolved or reject later. isliye baas ye execute hoga
    reject(20);//it will no execute as promise is settled earlier and it cant be settled more than once.
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
