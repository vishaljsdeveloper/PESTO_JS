//EX1=
let count = 0; 
setTimeout(function () { 
count++; 
console.log(`In setTimeout-  ${count}`); 
}, 1000);
console.log(`${count}`);//or console.log(count);
//output= pehle 0 fir 1 kyunki set timeout wala 1 second bad run hoga. time badha kar 10 sec pe check kar lo dikhega


//EX2= doubt hai
for (var i= 0; i < 3; i++) { 
    setTimeout(function(){
         console.log(i);
         }, 100);
        }
//OUTPUT= 3 aayga teen bar kyunki yaha par var ka scope global hai .set timeout ke karan 
//loop pehle hi chal chuka hoga  or i ka value 3 ho gaya hoga fir jab ye function run kiya
// hoga to 3 print ho gaya hoga kyunki i jo hai wo var ke global scope me hai to loop ke andar bhi chalega.
//yaha agar var ki jagah let use karte to output 0,1,2 aata kyunki let ka  scope block level hai


//EX3=
function a () { 
    let fn; 
    var x = 5;
    fn= function () { //yaha bhi direct return likh sakte hai niche likhne ke bajaye
     console.log(x);
    } 
    return fn;//fn function pura return hokar a me store ho jayga. isko uper se bhi return kar sakte the line27 se.
} 
var x = 10;//ye tab lega jab x=5 ko comment karenge kyunki sabse pehle child apne scope me search karega fir apne
//parent ke scope me fir global me jayga. agar global me 1 se jada jagah x declare hoga to jaha call ho raha hai
//thik uske uper jo x ka value declare hua hoga usko lega
const b = a(); 
b();

//EX4=
var a = 100; 
function abc(x) { 
var a = 10; //comment karke dekho a = 50 ko lega
return function (y) { //annonymus function hai to niche se return nai kae sakte hai kynki function ka naam 
                    //likhna parega  ex3 type. ye return hoga abc ko pura ka pura annonymus function
    return a + y; //ye annonymus function ko return hoga
};
 }
  a = 50;//yaha 1 se jada jagah global  me a ka value declare hai agar var a=10 ko comment kar de to a=50 lega 
          //kyunki wo hi just uper hai jab hum abc ko call karke inner me dal rahe hai
  var inner = abc(20); //inner me pura annonymus function assign ho gaya
  function foo() {
    var a = 30; //this will not come in the scope of inner even if we not found a in global scope because
                // it is declared in another block and it ha a block leve scope.
    console.log(inner (5)); //y me 5 pass kar rahe hai because inner=function (y) { return a + y};
}
 foo();

 //EX5= using (Immediately Invoked Function Expression)  :-as shon below way we can write IIFE
 (function immediateA(a) { 
     return (function immediateB(b) { 
         console.log(a);
        })(1); //it will invoke second
        })(0);//a = first this will invoke
//sabse pehle a invoke hoga or 0 usme jayga as a argument to wo return me child function ko lega
//child function return hone se pehle invoke hoga or 1 as a argument pass karega to console.log(a) hoga or wo
// a apne parent se le lega, or fir child return hoga immediate a me to output 0 milega.

//EX 6= using two child function
function createIncrement() { 
let count = 0; 
function increment() { 
count++; 
} 
let message = `Count is ${count}`; //ye first bar jab createincreament call hoga tabhi set ho jayga 0.
//ye increase nai hoga kyunki jab jab icreament call hoga to count to badhega lekin message nai or humlog message 
//ko increament function ke andar nai rakha hai , bahar hai wo
function log() { 
console.log(message); //iske jagah count ko consolelog karenge to 3 milega
}
return [increment, log];//ye dhyan se dekh lo kaise 2 function ko ek sath return karte hai 
} 
const [incremen, lo] = createIncrement ();//2 function jo return hua hai usko kaise store karte hai 
incremen (); //createIncrement ko jisme store kiye hai usi naam se call karna hoga na ki child function kr naam se
incremen(); 
incremen(); 
lo(); // What is logged?//output=0

//is problem ko solve kar sakte hai message variable ko increament function ke andar lekar
function createIncrement() { 
    let count = 0; 
    let message ;
    function increment() { 
    count++; 
    // let message = `Count is ${count}`;//let message parent me declare karna hoga kyunki function log 
                //function increment ke block ko access nai kar sakta .uska scope apne parent ya global pe hai
    message = `Count is ${count}`;
    } 
    function log() { 
        console.log(message);
        }
        return [increment, log]; 
        } 
        const [increment, log] = createIncrement (); 
        increment (); //1
        increment(); //2
        increment(); //3
        log();

//EX=7//samajh nai aaya kya ho raha hai
function createUser(initialName) { 
let name = initialName;
return { 
getName() { 
return name; 
},
setName(newName) {
name = newName;
},
}
}
let p1 = createUser('arfat'); //! ENV { name = 'arfat', {getName, setName}
let p2 = createUser('salman'); // ENV { name null, { getName, setName] }
p2.setName(null);
console.log(p1.getName());
