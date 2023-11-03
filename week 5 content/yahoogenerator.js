//GENERATOR :- generator bhi iterator ki tarah hume each line of code pe contorl deta hai ki konsa print karna hai
//or konsa nai. lekin generator ka use hum function ke sath karte hai.
//creating a generator function:- agar function name se pehle * laga de to wo generator ban jata hai.
//function* likhe pe bhi generator ban jata hai lekin recommended hai function name se pehle * lagana.
//each line of code ko pause karne ke liye hum 'yield' ka istemal karte hai. ja ha par 'yield' likhenge
//code wahi pause ho jayga. usko print karne ke liye hum next() method ka use karte hai similar to iterator.

//ex=
function* generateit() {
    console.log('yield1');
    yield 'this is yield1' //yield ka matlab pause hota hai
    console.log('yield2');
    yield 'this is yield2'
}
//generateit(); //output= kuchh nai aayga kyunki ye simple function nai hai generator hai.
let g = generateit()
console.log(g);/*output= generateit {<suspended>}
[[GeneratorLocation]]: yahoogenerator.js:9
[[Prototype]]: Generator
[[GeneratorState]]: "suspended"
[[GeneratorFunction]]: ƒ *generateit()
[[GeneratorReceiver]]: Window
[[Scopes]]: Scopes[2]

jo jo method hai generator function ka wo sab mil jayga jisko hum use kar sakte hai
*/

console.log(g.next());//yield1 {value: 'this is yield1', done: false}//agar uper hum yield likhte hi nai to 
//function ke andar ka sab line execute ho jata g.next() karne par. yield ko hum pause karne ke liye use karte hai.
console.log(g.next().value);//yield2
console.log(g.next());//{value:undefined, done: true}

//agar hume kisi line ko print hi nai karna hai skip karna hai to usme console.log mat karo next method
//se call kaene ke bad.
function* generateit1() {
    yield 'it is yield1' //yield ka matlab pause hota hai
    yield 'it is yield2'
    yield 'it is yield3'
}
let h = generateit1();
console.log(h.next().value);
h.next()// ye print nai hoga kyunki isme hum console.log nai lagaye hai
console.log(h.next());

//manlo agar hum 300 yield banaye hai or sabko print karna hai to hum for of loop ka use kar sakte hai.
//ex=
function* generateit2() {
    yield 'here yield1' //yield ka matlab pause hota hai
    yield 'here yield2'
    yield 'here yield3'
}
let a = generateit2();
for (let val of a) {
    console.log(val);
}//for of loop se bas yield ka value print hoga

//hum unlimited yield bhi create kar sakte hai.ex= agar ek numbe hai 300 or usko increment karke baar baar
//next method se print karna ho to unlimited yield create kar sakte hai,
function* generateit3() {
    let numNext = 200;
    while (true) {
        yield (numNext++);
    }
}
let b = generateit3();
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);//jitna bar console.log kareneg utna bar print hoga value increase hokar

//hum chahe to unlimited yield ko for of loop laga kar bhi print kar sakte hai. uper wale case me 
//hum if statement use kar lete hai nai to infinite loop ban jayga.
function* generateit4() {
    let numNext = 200;
    while (true) {
        yield (numNext++);//variable daal rahe hai value me isliye bracket lagaya hai.
    }
}
let c = generateit4();
for (let value of c) {
    if (value > 205) {
        break;
    }
    console.log(value);
}

//hum yield ko store karke uske value ko bahar se bhi pass kar sakte hai.
function* generateit5() {
    let result = yield;//is yield ko hum bracket me bhi dal sakte hai (yield). lekin jarurat nai hai agar
    // operation nai kar rahe yield ke sath to
    console.log(`result: ${result}`);
}
let d = generateit5()
d.next();//is se generateit5 function call ho jayga, ab hum yield ka value pass kar sakte hai next method se.
d.next(300);

//hum yield ke value ke sath arithmatic operation bhi kar sakte hai
function* generateit6() {
    let result1 = (yield) * 2;
    console.log(`result: ${result1}`);
}
let z = generateit6()
z.next();//is se generateit5 function call ho jayga, ab hum yield ka value pass kar sakte hai next method se.
z.next(500);//output=1000

//hum multiple yield ko 1 variable me store karke bhi bahar se value pass kar sakte hain.
function* generateit7() {
    let result2 = [yield, yield, yield];//multiple yield lene ke liye array bana parega
    console.log(`result: ${result2}`);
}
let y = generateit7();
y.next();
y.next(10);//output: result: 10
y.next(20);//output: result: 10,20
y.next(30);//output: result: 10,20,30
y.next(40);//ye print nai hoga kyunki hum 3 hi yield liye hai

//hum chahe to multiple yield ko 1 variable me store karke kisi ek yield ko bhi print kar sakte hai index se.
function* generateit8() {
    let yarray = [yield, yield, yield];//multiple yield lene ke liye array bana parega
    console.log(`result: ${yarray[1]}`);
}
let x = generateit8();
x.next();
x.next('java');
x.next('php');//output:- php
x.next('1000');

//hum yield ke value me direct bhi array bana kar multiple value daal sakte hai.
function* generateit9() {
    yield 55;
    yield [220, 'java', 125]
}
let w = generateit9();
console.log(w.next());//{value: 55, done: false}
console.log(w.next());//{value: Array(3), done: false} . teeno element ek sath aayga

//hum chahe to yield ke teeno element ko alag alag bhi le sakte hai , uske liye yield me * lagana hoga
function* generate() {
    yield 55;
    yield* [220, 'java', 125]
}
let v = generate();
console.log(v.next());//{value: 55, done: false}
console.log(v.next());//{value: 220, done: false}
console.log(v.next());//{value: 'java', done: false}
console.log(v.next());//{value: 125, done: false}
console.log(v.next());//{value: undefined, done: true}

//hum SPREAD OPERATOR ka use karke baki bache hue yield ke value ko 1 bar me print kar sakte hai.
function* generate1() {
    yield 550;
    yield 2200;
    yield 'java';
    yield 1250;
}
let u = generate1();
console.log(u.next().value);//550
console.log([...u]);//(3) [2200, 'java', 1250] . spread operator me next nai lagana hai

//return() method in generator :- isko generator function ko return karne ke liye use karte hai. return
//method ke bad agar hum next() method lagate hai to bhi bacha hua yield print nai hoga kyunki 
//return kr bad aage ka statement print nai hota hai. iska fayda ye hai ki agar hum function ko end karna
//chahte hai 1-2 statement ke bad to iska use karke kar sakte hai.
function* generate2() {
    yield 5500;
    yield 2200;
    yield 'java';
    yield 1250;
}
let t = generate2();
console.log(t.next().value);//5500
console.log(t.return('iske bad ab koi yiled print nai hoga'));//{value: 'iske bad ab koi yiled print nai hoga',
// done: true}
console.log(t.next().value);//undefined