// Symbols :- it is used to create unique kye as sym1 is not equal to sem2 unlike other primitive data type.
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
console.log('Symbol is ', sym1);
console.log('Type of Symbol is ', typeof sym1);
console.log(sym1===sym2);//false. because every symbol is unique
const a = "this is";
const b = "this is";
console.log(a === b);//true
console.log(null === null)//true
console.log(undefined === undefined); //true

const k1 = Symbol('identifier for k1'); 
const k2= Symbol('for k2'); 
myObj = {};
 myObj[k1]= "Harry";
  myObj[k2] = "Rohan"; 
  console.log(myObj) ; 
  console.log(myObj[k1]); 
  console.log(myObj["k2"]); //ye bhi work nai karega. ye bas string ko leta hai :- undefined
  console.log(myObj.k2); // cannot do this to get Rohan. dot notation symbol me work nai karega kyunki wo bas
  //string ko leta hai :- undefined . same as myObj["k2"]
  myObj.name='good';
  myObj[4]='int';//myObj["4"] bhi kar sakte hai
  // Symbols are ignored in for in loop 
  for (key in myObj) { 
console.log(key, myObj[key]) 
} 

console.log(JSON.stringify(myObj))//isme bhi symbol ignore hoga