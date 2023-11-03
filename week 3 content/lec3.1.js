//THIS: "DYNAMIC CONTEXT"
//EX1
 const obj = { 
 firstName : 'Arfat', 
 print : function() {
console.log(this.firstName);
}
};
setTimeout (obj.print, 100);
//ex2
 var obj1 = {
firstName : 'Jane',
friends : ['Tarzan', 'Cheeta' ], 
loop : function (){
    //till here, this = obj1 scope
this.friends.forEach(function (friend){
    //here this= global scope. we will see later to turn around this
 console.log(this.firstName + " "+ 'knows' + friend)
})
} 
}
obj1.loop(); 

//Object Methods:- Methods are actions that can be performed on objects.
let obj2 = {
    firstName : 'arfat', 
    print() {
         return this.firstName;
    }
}
console.log(obj2.print(  
));
// this inside methods 
// • Unlike other languages (such as Java), the 'this is not bound to any specific object in JavaScript The 
// 'this value can be modified in a couple of ways. 
// • Default binding (when no object is supplied) 
// • Implicit binding (when an object is supplied naturally) 
// • Arrow functions (when arrow functions are used) 
// • Explicit binding (When call, bind, or apply is used) 
// • new binding (When `new keyword is used) 
// • strict mode (When using 'use strict') 
// • Contextual (libraries or framework may change values, for e.g. Event emitters) 
// • Others

// Important Rules:-
//  1. this is not an compile time binding but is a run time binding.you cant say anything about this looking 
//  at the code, you have to execute the code to understand scope of this.
//  2 • this has nothing to do with where and how the function is declared but have everything to do 
//  with how that function is invoked/called.

// Default binding :_
// • Standalone function invocation. 
// • If no other binding rule matches, then it is default binding. 
// It sort of works like default catch-all rule.
//EX=
function print(){
//! global in Node.js
 // window in the browser 
 console.log(this.firstName); 
} print(); //output undefined because there is no first name in global object
//if we give any global object to first name it will take it.
// globalThis.firstName='vishu';
// function print(){
//     //! global in Node.js
//      // window in the browser 
//      console.log(this.firstName); 
//     } print(); //output vishu because there is vishu as first name in global object

// Implicit binding :-
// Implicit binding rule says that it's adjoining object which should be used for the function call's this binding.
//EX=
function foo() { 
    //this = point obj5 when call like obj5.print
console.log(this.a); 

} 
const obj5 = {
     a : 2,
     print : foo,// we ca declare function outside and can use it as  a value inside an object
    }; 
    //Foo();//ouput= undefined because there is no global object as "a" here. and when we direct calls a function
    //then this key word points to global/window object
     obj5.print();//output will be 2 because we are invoking the function foo by binding implicitly to the object
     //so the now this keyword will oint to the obj5, from this two calling ways it is clear that  this has nothing
      //to do with where and how the function is declared but have everything to do with how that 
      //function is invoked/called.
    // IMPLICIT LOST: if we store the obj5.print in any other variable and then call it then this becomes
    // global again and it loses the refernce of onj5.print . this is called as implicit loss.
    //ex= continuing from above example only
    var fn = obj5.print;//we dont have to use () after obj5.print here.
    fn();//undefined because it will see how you are executing fn . and fn is alone here so this=global
    //EX2=
    var counter ={
        count : 0, 
        inc : function () { 
        console.log('inc was called'); 
        this.count++; 
    }, 
}
    setTimeout(counter.inc, 1000); 
    setTimeout(() => { 
        console.log(counter.count);
     }, 2000);//OUTPUT =0 even though inc function was called because counter.count is called within settimeout
     //function so this will now point to global count and count is not declared in global, it is declared in 
     //counter object . USE STRICT MODE TO AVOID THIS THINGS
     //it will work this way:-
    //  counter.inc();
    //  console.log(counter.count); // implicit loss will happen if we store counter.inc in another variable


// Arrow Functions:- New Kind of Function.apply
//  const arr = [1, 2, 3]; 
//  const squares = arr.map(x=>x *x);
//   () => { ... } // no parameter
//   X => { ... } // one parameter, an identifier 
//   (x, y) => { } // several parameters 
//   Specifying a body : x=> { return x*x}// block.
//    X => x* x 
//    The complete list of variables whose values are determined lexically  in arrow function is : 
//    arguments, super, this, new.target
//ARROW FUNCTION WILL FIX THE PROBLEM OF THIS SCOPE IN EX 2 as ARROW FUNCTION HAS LEXICAL SCOPE OF THIS
//lets see how we can TURNAROUND EXAMPLE 2 using different way
//ex2
//method 1:- that = this : not to rely on this keyword directly. we can create another variable which is lexically
//scoped and assign this while the scope of this is object into lexically scoped variable.
var obj6 = {
    firstName : 'Jane',
    friends : ['Tarzan', 'Cheeta' ], 
    loop : function (){
        var that = this;
        //till here, this = obj6 scope
    this.friends.forEach(function (friend){
        //here this= global scope. 
    //  console.log(this.firstName + " "+ 'knows' + friend)
    console.log(that.firstName + " "+ 'knows' + friend)//scope of that is obj6
    })
    } 
    }
    obj6.loop();
    //method 2:- by creating a new function that is bind() and fixing this keyword in bind function.
    var obj7 = {
        firstName : 'Jane',
        friends : ['Tarzan', 'Cheeta' ], 
        loop : function (){
            //till here, this = obj6 scope
        this.friends.forEach(function (friend){
            //here this= global scope. 
         console.log(this.firstName + " "+ 'knows' + friend)
        }.bind(this));//fixing this using bind function. scope of this = obj7
        } 
        }
        obj7.loop();

    //method 3:- passing the second argument as  'this' to forEach loop. it will make the socpe of this=obj7 within 
    // the forEach loop 
    var obj8 = {
        firstName : 'Jane',
        friends : ['Tarzan', 'Cheeta' ], 
        loop : function (){
            //till here, this = obj6 scope
        this.friends.forEach(function (friend){
            //here this= global scope. 
         console.log(this.firstName + " "+ 'knows' + friend)
        }, this);//fixing this using 2nd argument of foreach loop. scope of this = obj8
        } 
        }
        obj8.loop(); 
    
    //method 4 :-the best way to solve this problem is by using an array function. because the scope
    // of this in array function is lexical it means it will first search in his own scope then in his parent scope.
    var obj9 = {
        firstName : 'Jane',
        friends : ['Tarzan', 'Cheeta' ], 
        loop : function (){
        this.friends.forEach((friend)=>{ 
         console.log(this.firstName + " "+ 'knows' + friend)
        });//fixing this using arrow function. scope of this = obj9
        } 
        }
        obj9.loop();

