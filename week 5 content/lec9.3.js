//GENERATOR as OBSERVERS :- jab generator me hum yield ka value ko bahar se pass karte hai to use hi observer 
//bolte hai.
//As an observer, a generator pauses until it receives input. There are three kinds of input, 
//transmitted via the methods specified by the interface : 
//• next() sends normal input. 
//• return() terminates the generator. 
//• throw() signals an error.

//passing value via next().
function* gen() {
    console.log('Started');
    let str = ` 1. ${yield}`;
    console.log(str);
    console.log(`2. ${yield}`);
    return 'result'; //ye print nai hoga jab tak last wale next ko console.log nai karenge.
}
const genObj = gen();
genObj.next(); //! Actually start the generator . first yield milte hi pause ho jayga . jab resume hoga to value
//pass kae sakte hai.
genObj.next(10); // the first yield . agar koi value pass nai karega to undefined show karega.
genObj.next('b'); // the second yield 
genObj.next('c');//koi yield hi nai hai ye value pass karne ke liye.

//Unfortunately, next() is asymmetric, but that can't be helped : It always sends a value to the currently 
//suspended yield, but returns the operand of the following yield. ,atlab hun 2nd wala next() method se
//hi value pass kar sakte hain. first wale se nai kyunki wo bas generator ko start karta hai.

//yield me function ke andar bhi value de sakte hai or bahar se bhi ek sath.
function* gen1() {
    console.log('Started');
    let str = ` 1. ${yield 42}`;
    console.log(str);
    console.log(`2. ${yield 65}`);
    return 'result'; //ye print hoga kyunki last wale next ko console.log  karenge.
}
const genobj = gen1();
console.log(genobj.next()); //is se 42 return ho raha hai or pause ho ja raha hai
console.log(genobj.next(100)); // is se 1st yield me 100 pass ho raha hai or 65 return ho raha hai 2nd yield se.
console.log(genobj.next('bcd'));//is se 2nd yield me value pass ho raha hai or  return jo hai wo return ho raha.

//retrn() method terminate kar dega . uske bad next likhne pe bhi execute nai hoga.
//return() performs a return at the location of the yield that led to the last suspension of the generator.
function* gen2() {
    console.log('Started');
    let str = ` 1. ${yield 44}`;
    console.log(str);
    console.log(`2. ${yield 65}`);
    return 'result';
}
const genob = gen2();
console.log(genob.next());
console.log(genob.return('this is return'));//{value: 'this is return', done: true}
console.log(genob.next(100));//{value: undefined, done: true}
console.log(genob.next('bcd'));//{value: undefined, done: true}

//throw() throw() throws an exception at the location of the yield that led to the 
//last suspension of the generator. samajh nai aaya achhe se.
function* gen3() {
    try {
        console.log('Start');
        let str = ` 1. ${yield 88}`;
        console.log(str);
    } catch (el) {
        console.log('caught an error')
    }
    console.log(`2. ${yield 55}`);
    return 'result';

}
const geno = gen3();
console.log(geno.next());
console.log(geno.throw(new Error('error')));
console.log(geno.next());
console.log(geno.next());

//yield*
function* cycle(iter) {
    while (true) {
        yield* iter;
    }
}
let i = cycle('abc');
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

//yield* As a rough rule of thumb, yield* performs (the equivalent of) a function call from 
//one generator (the caller) to another generator (the callee). 
function* callee() {
    console.log('callee :' + (yield 10)); //suspenseion yaha ho raha hai caller me nai
}
function* caller() {
    while (true) {
        yield* callee();
    }
}
a = caller();
console.log(a.next());
console.log(a.next());
console.log(a.next());
//redux saga bahut jada generator ko use karta hai.