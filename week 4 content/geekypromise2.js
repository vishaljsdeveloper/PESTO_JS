//refactoring call back using promise:-
// console.log("Start")
// function getName(name, callback) {
//     setTimeout(() => {
//         console.log("Inside SetTimeOut");
//         callback(name);
//     }, 2000)
// }

// function getHobbies(name, callback) {
//     setTimeout(() => {
//         console.log("Inside  Hobbies SetTimeOut")
//         callback(['Cricket', 'Reading', 'Dancing']);
//     }, 2000)
// };
// getName('Sonam', (ns) => {
//     console.log(ns);
//     getHobbies(ns, (hobby) => { console.log(hobby);})//ns nai likhne pe undefined aana chahie na ?
// });//nn ka alag function bana kar bhi uska naam de sakte the as a argument
// console.log("End");


//REFACTORING
console.log("Start")
function getName(name) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Inside SetTimeOut");
            resolve(name);
        }, 2000)
    })
}

function getHobbies(name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Inside  Hobbies SetTimeOut")
            resolve(['Cricket', 'Reading', 'Dancing']);//ye value hobby ban jayga
        }, 2000)
    });

};
getName('vishal').then((naam)=>{//arrow function me agar single statement hai to curly braces use karne ka need 
    //nai hai or isme return bhi apne aap ho jata hai. agar braces use karenge to return  karna parega
     console.log(naam);
   return getHobbies(naam) ;
}).then(function(hobby){
    console.log(hobby);
});
console.log("End");