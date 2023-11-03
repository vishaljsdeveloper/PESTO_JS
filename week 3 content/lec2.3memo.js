// Implementing Memoization in JavaScript 
// Memoization is an optimization technique that can be used to reduce 
// time-consuming calculations by saving previous input to something called cache and 
// returning the result from it. |
//we do it when ever we have an expensive function
//cache is nothing but a blank object or map . it ask the question whether we have the argument or not. 
//if it has argument then it will serve its result instead of computing again . and if not it will compute
//and store the result in cache for future use 

//EX1

//creating an expensive function which we will use in memoize function to save execution time
//let sum = 0; next time me 15 se start ho raha hai kyu?lekin memoize me nai ho raha hai kyu ?
function calc(n){
    let sum = 0;
    for(let i=0; i<=n ; i++){
    sum+=i;
}
return sum;
}
//checking time without memoizing
// console.time();
// console.log(calc(5));
// console.timeEnd();
// console.time();
// console.log(calc(5));
// console.timeEnd();
//CREATING MEMOIZE
const memoize =(func)=>{
    let cache ={};//2nd time call karne pe kya ye fir se blank nai ho jayga?
    return function(...args){
        let n = args[0];
        if(n in cache){//agar cache me n hai to
            console.log('cached result')
            console.log(cache);
            return cache[n];//n key ka value return kar do
        }
        else{
            console.log('calculating first time')
            let result = func(n);
            cache[n] = result;
            return result;
        }
        }
    }
    let fast = memoize(calc);//sara return wala function fast variable me store ho gaya hai
    console.time();
    console.log(fast(15500));//jo return function store hua tha usko bhi ...args me ek argument chahiye 
                          //to wo pass kiye hai ab
    console.timeEnd();

    console.time();
    console.log(fast(15500));
    console.timeEnd();
    console.time();
    console.log(fast(500));
    console.timeEnd();
    console.time();
    console.log(fast(500));
    console.timeEnd();

    //EX2=
    //creating an expensive function which we will use in memoize function to save execution time
    const ridiculousSlowFunc=(num)=> { 
        for (let i = 0; i <= num; i++) {
         if (i===num) { 
             return i; 
            } 
        }; 
    }
    //checking time without memoizing
    // console.time(); 
    // console.log(ridiculousSlowFunc(2000000000000)); 
    // console.timeEnd();
    // console.time(); 
    // console.log(ridiculousSlowFunc(2000000000000)); 
    // console.timeEnd();

    //creating memoize
    const memo = (fn)=>{
        let cach = {};
        return function(...args){
        if(cach[args]){
            console.log('cached result')
            return cach[args];//dot notion or bracket notion ko mix karne pe kaam kyu nai kar raha hai?
        }
        else{
            console.log('calculating first time')
            const result = fn(...args);
            cach[args]= result;
            return result;
        }
        }
    }
   fastfunc =  memo(ridiculousSlowFunc);
    console.time(); 
    console.log(fastfunc(200000000)); 
    console.timeEnd();
    console.time(); 
    console.log(fastfunc(200000000)); 
    console.timeEnd();
    console.time(); 
    console.log(fastfunc(400000000)); 
    console.timeEnd();
    console.time(); 
    console.log(fastfunc(400000000)); 
    console.timeEnd();

