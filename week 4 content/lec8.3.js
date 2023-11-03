//IMPLEMENTING ITERATORS :- object pehle se iterator nai hota hai . object ke element ko hum for of loop se nai
//access kar sakte hai. uske liye object ko iterable bana na parta hai.
let obj = {
    //iterable
    [Symbol.iterator]() {
        let i = 0;
        return {
            //iterator
            next() {
                return { value: i++, done: i > 10 }
            },
        };
    },
};
//rough algorithm:-
//!iter obj[Symbol. iterator]() 
// while (liter.next().done) { 
// assign .value to "el" 
for (const el of obj) {
    console.log(el)
};
//above example me iterator or iterable alag alag hai isliye isme hum bich me rok kar fir dubara se loop 
//ko chalayenge to wo fir se start se chalega na ki jaha chhora tha waha se chalega.

//making iterable nad iterator same.:-One advantage is that you can continue an iteration in another loop .
let obj1 = {//iterable and iterator
    a:0,
    [Symbol.iterator]() {
        return this;
    },
    
    next() {
        return { value: this.a++, done: this.a > 10 }
    }
}
for (const el of obj1) {
    console.log(el)
    if(el>5){
        break;
    }
};
console.log('after break')//yaha iterable or iterator same hai to hum bich me chhorkar fir se jaha chhora tha waha
//se start kar sakte hai
for (const el of obj1) {
    console.log(el)
};

//Optional iterator methods : return() and throw() :-
//Two iterator methods are optional : 
//• return() gives an iterator the opportunity to clean up if an iteration ends prematurely. 
//• throw() :-ye nai padhna hai

//return():- jab hum un naturally loop ko band karte hai break, skip etc se to ye return wapas milta hai warna nai.
//Closing iterators via return() :-
//In for-of loops, premature (or abrupt, in spec language) termination can be caused by : 
//• break 
//• continue (if you continue an outer loop, continue acts like a break) 
//•throw 
//• return
//ex=
let obj2 = {//iterable and iterator
    b:0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        return { value: this.b++, done: this.b > 10 }
    },
    return(){//niche break use kiye hai isliye ye return hua. agar break ,skip etc use nai karenge to 
             //ye execute nai hoga
        console.log('completion abrupted');
        return{done:true}
    }
}
for (const el of obj2) {
    console.log(el)
    if(el>5){
        break;
    }
};
