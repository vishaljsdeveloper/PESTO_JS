//GENERATORS:- Definition1 :-A generator is a function that produces a sequence of results instead of a 
//single value, i.e you generate a series of values. * signifies that its a generator function.
//ex=
function* naturalNumbers() {
    let num = 1;
    while (true) {
        yield num;//suspended here. ab iske bad se code execute hoga jab next likhenge.
        num = num + 1//direct num++ bhi kar sakte the
    }
}
const numbers = naturalNumbers();
console.log(numbers.next().value)  // 1
console.log(numbers.next().value) // 2

//Behavior is quite different than normal func 
//• Calling a generator function creates an generator object. However, it does not start running the function.
function gen() { }
console.log(gen());//undefined because we are not returning anything to function

function* gen1() { }
console.log(gen1());//gen1 {<suspended>}. it is not undefined  because generator function is an object.

function* gen2() {
    console.log('started');//not printed because Calling a generator function does not start running 
    //the function.
    return 5;
}
console.log(gen2());

//definition2 :- A generator is simply a function which returns an object on which you can call next(); such that
// for every call it returns some value, done becomes false. 
//Such an object is called an iterator.

function* gen3() {
    console.log('started');
    yield 5; // suspend here 
    console.log('after 5');
    yield 99; //! <- suspend here 
    console.log('after 99');
    yield 103;  //! <- suspend here
    console.log('after 103');
    return 5;
}
const iter = gen3(); // initializes the gen 
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());//{value: 5, done: true}

//we can do this by for of loop. isme return show nai hoga kyunki done ka value true hone ke bad for of
//loop baki sabko discard kar deta hai.
function* gen4() {
    yield 5; // suspend here 
    yield 99; //! <- suspend here  
    yield 103;  //! <- suspend here
    return 5;
}
const iter1 = gen4(); // initializes the gen 
for (let el of iter1) {
    console.log(el);
}

//Advantages of Generators :-
//1. Generators make lazy evaluation possible.
//2. Generators are good for calculating large sets of results where you don't know if you are going 
//to need all results.
//3.It is memory efficient since all the data need not be generated at once.

//Generators vs Iterators :-
//• A generator function is slightly different than an object that supports iteration. 
//• A generator is a one-time operation. You can iterate over the generated data once, but if you want to do 
//it again, you have to call the generator function again. 
//• This is different than a list (which you can iterate over as many times as you want)
