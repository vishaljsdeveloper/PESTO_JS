//iterators :- iska istemal hum string,object,array etc ke element ko iterate karne ke liye use karte hai.
//ye kam hum for, forof,forin,foreach ,map etc ke madad se bhi kar sakte hai lekin isme fayda ye hai ki
//hum jis element ko console karna chahte hai usko kar sakte hai or jisko nai chahte hai usko chhor sakte hai.
//basically hamara control hota hai har element pe.
//iterator ek function hai jiske andar ek next() naam ka function hai or use next function ke andar 1 object
//hai jiska 2 property hai :- 1.value 2. done 
let numbers = [100, 200, 300];
let iter = numbers[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next().value);
console.log(iter.next());
console.log(iter.next());// undefine or true aayga. kyunki 3 hi element hai to 4th me true show karega

//manlo agar 300 value hai or sab dekhna hai to hum isme while loop bhi use kar sakte hai.
let numbers1 = [10, 20, 30];
let iter1 = numbers1[Symbol.iterator]();

let result = iter1.next();
while (!result.done) {
    console.log(result.value);
    result = iter1.next();
}

//iterator ka use hum string ke sath bhi kar sakte hai , object ke sath bhi
let str = 'vishal singh';
let iter2 = str[Symbol.iterator]();

let result2 = iter2.next();
while (!result2.done) {
    console.log(result2.value);
    result2 = iter2.next();
}
//ye for of loop se jada asanai se ho jayga
for (let char of str) {
    console.log(char);
}

//hum apna khud ka bhi iterator bana sakte hai :-
function numberIterator(arr) {
    var numNext = 0;
    return {
        next() {
            if(numNext<arr.length){
            return {
                   value : arr[numNext++],//pehle print kar raha hai tab increment kar raha hai.++numNext me pehle
                                           //increment hoga tab print hoga
                   done : false,
            }
        }else{
            return {
                value :undefined,
                done : true
         }
        }
        }
    }
}
let number = [25, 26, 27, 28];
let num = numberIterator(number);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());