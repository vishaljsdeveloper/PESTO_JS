//EXAMPLES OF GENERATORS:-
//EX1:-RANGE
function* range(upperBound) {
    // const result = []; //ye sab normal function me use kiya tha . to error aaya :- out of memory. lekin 
    //generator function use karne pe error nai aayaga.
    for (let i = 0; i < upperBound; i++) {
        // result.push(i); 
        yield i;
    }
    // return result; 
}
for (const el of range(10000)) {
    console.log(el);
}

//EX2= cycle: jo bhi comment kiya hua hai usko uncomment karke bhi cycle achieve kar sakte hai uske liye jo
//uncoomented hai usko comment karo or jo commented hai usko uncomment.
function* cycle(iter) {
    // let i 0; 
    while (true) {
        for (const el of iter)
            yield el;
    }

// while (isiter.length) { 
// yield iter[i];
// i++;
//if (i>=iter.length) { i = 0; }  
// } 
}
let i = cycle([1, 2, 3]);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

//EX3= REVERSE
function *reverse(iter) {
    for (let a = iter.length - 1; a > -1; a--) {
        yield iter[a];
    }
}
for (const el of reverse([1, 2, 3])) {
    console.log(el);
}