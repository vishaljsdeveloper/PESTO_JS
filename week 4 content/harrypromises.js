//PROMISE:-
// -resolve 
// -reject 
// -pending 
function func1() { 
return new Promise(function(resolve, reject) { 
setTimeout(() => { 
const error = true; 
if (!error){
 console.log(' function : Your promise has been resolved') 
 resolve(); 
}else{ 
console.log('function : Your promise has NOT Been resolved');
 reject('Sorry not fulfilled'); } }, 2000)
}); 
}

func1().then(function(){ //resolve me jo function banyenge use as a argument yaha denge
console.log("Harry : Thanks for resolving") 
}).catch(function(error) { 
console.log("Harry : Very bad bro reason:" + error) 
}) ;I
