// Async-Await
// async - This keyword is used to turn a function declaration to async function.
//  async Function - An async function is a function declared with the async keyword.
// An async function is a function that knows how to expect the possibility of the await keyword being used to 
// invoke asynchronous code. It returns a Promise. 
// await - The await operator is used to wait for a Promise.
// It can only be used inside an async function within regular JavaScript code.
// await can be put in front of any async promise-based function to pause your code on that line until
// the promise fulfills, then return the resulting value.

//way to write async function . await isi async function ke andar likhte hai jo wait karta hai promise function ka.
// Async Function :-
// async function function_name () {.........} ;
// Async Function Expression :-
// let function_name = async function () {…............ }
// Async Arrow Function :-
// let function_name = async () => {...…………...}


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
            resolve(['Cricket', 'Reading', 'Dancing']);
        }, 2000)
    });

};
// getName('vishal').then((naam)=>
//     // console.log(naam);
//     getHobbies(naam) 
// ).then(function(hobby){
//     console.log(hobby);
// });

async function showHobby(){
    try{
    const nm = await getName('vishu');
    // console.log(nm);
    const hobby = await getHobbies(nm);
    console.log(hobby);
}catch{
console.log('could not fetch data')
}
};
showHobby();
console.log("End");

//What we learnt here :-
//difference between synchonous and asynchronous call
//call back is not always asynchronous
//callback Hell
//solving callback hell using promise
//async - await