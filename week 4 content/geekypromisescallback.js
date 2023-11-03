// console.log("Start")
// function getName(name) {
//     setTimeout(() => {
//         console.log("Inside SetTimeOut");
//         return name;
//     }, 2000)
// }
// const nm = getName('Sonam');
// console.log(nm);//undefined aayga kyunki nm milega nai 2 second tak or console.log execute ho jayga
// console.log("End");
//using call back in above program to solve the issue
console.log("Start")
function getName(name, callback) {
    setTimeout(() => {
        console.log("Inside SetTimeOut");
        callback(name); 
    }, 2000)
}
getName('Sonam', (nn) => { console.log(nn) });//nn ka alag function bana kar bhi uska naam de sakte the as a argument

console.log("End");
//jab complex code aata hai to call back ka scenario complicated hota jata hai. isme ek or call back add karte hai
console.log("Start")
function getName(name, callback) {
    setTimeout(() => {
        console.log("Inside SetTimeOut");
        callback(name);
    }, 2000)
}

function getHobbies(name, callback) {
    setTimeout(() => {
        console.log("Inside  Hobbies SetTimeOut")
        callback(['Cricket', 'Reading', 'Dancing']);
    }, 2000)
};
getName('Sonam', (ns) => {
    console.log(ns);
    getHobbies(ns, (hobby) => { console.log(hobby);})//ns nai likhne pe undefined aana chahie na ?
});//nn ka alag function bana kar bhi uska naam de sakte the as a argument
console.log("End");
//ek callback ke andar dusra call back, dusre callback ke andar teesra callback aisa hota hai
// to use hum call back hell kehte hain. is callback hell se bachne ke liye hum promise ka use karte hai.
