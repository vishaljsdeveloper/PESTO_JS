//BIND (DYNAMIC CONTEXT):-
//EXPLICIT BINDING (when CALL, BIND and APPLY are used):-
//.bind:- by using .bind() function we create an another function(variable that in which we assigned its value) 
//which permamently bound .bind() function. it means we cant rebind the another function to different value.
//ex=1
function sum(a, b) { 
return this.a + this.b; 
}
//sumB is a different  function
//.bind binds permamently. it has permament binding nature.
const sumB = sum.bind({ a : 10, b : 20 });//this will work because we are binding the value of object
// that is a and b in sum. jab hum kisi object ko bind karte hai to this ka scope wo object ho jata hai.
// const sumB = sum.bind(20,30);// it will not work as scope of this = global. pehle state or country me this nai laga ha to work kar raha tha.
// obj ={ a : 10, b : 20 }
// const sumB = sum.bind(obj);//this will work becaise the scope of this=obj
 console.log(sumB());

 console.log(sum==sumB);//false. we can also use - console.log(sum()==sumB());
 //sum() or sumB() ka body same hai.. difference ye hai ki sum() unbounded hai yani usko ab hum or bhi object me 
 //bind kar sakte hai wahi dusri taraf sumB permamently bound ho chuka hai , use ba rebind nai kar sakte hai.
 // if we try to bind another value in sumB then it will not take/ have a lok below.
 const sumC = sumB.bind({ a : 40, b : 40 }); 
 console.log(sumC());//output=30 because sumB is already pemamently bounded.

 //.bind The bind() method creates a new function that, when called, has its 'this' keyword set to
 // the provided value, with a given sequence of arguments preceding any provided when the new function is called.
 // Syntax : function.bind(thisArg[, arg1[, arg2[...]]])

 //EX2
 var module = {
 X : 42, 
 getx : function() { 
return this.X; 
} 
 }
 console.log(module.getx());//output=42 because scope of this=object(module)
var fn = module.getx; 
 console.log(fn()); // global context because of implicit loss . we can bind module.getx to module 
//in order to over come from this problem
var fn = module.getx.bind(module); 
console.log(fn());//output =42= scope  of this= object(module).this has become bounded function. fn is permamently
//bounded to module object . it cant be rebind with any other object including the global object.

var unboundGetx = module.getx; 
console.log(unboundGetx()); 
// The function gets invoked at the global scope 
// expected output : undefined 
var boundGetx = unboundGetx.bind(module); // we can also use module.getx.bind(module); 
console.log(boundGetx()); // expected output : 42

//.bind is also used to create partial function. matlab ki pehle ek function ko bind karenge or uska pura argument
//pass nai karke kuchh argument pass karenge. fir jis function me .bind ko assign kiya hai usme baki argument
// ko pass kar sakte hai. jis se ki hum or bhi different tarika ka function derive kar sakte hai.
//ex=
function product(a, b) { 
return a * b; 
}
console.log(product(5, 10));//output = 50. it is normal
const double = product.bind(null, 2);//yaha 2 jo hai wo a ko assign hua hai or wo permament bound ho gaya hai.
//bind ki madad se hum kuchh parameters ko fix kar/bind sakte hai or baki parameter ko badme pass kar sakte hai.
//yaha null ka matlab ki hum koi bhi object ko bind nai kar rahe hai.
console.log(double(500));// b ka value 500 pass kar rahe hai. output=1000

const double1 = product.bind(null, 2, 10) ;
console.log(double1(4, 5));//output= 20 hi hoga kyunki a or b parameter ka value pehle hi bind kar chuke hai. to jo
// 4 an 5 hai wo 3rd or 4th parameter ban gaya hai lekin hamara jo function hai wo bas 2 hi parameter leta hai,



