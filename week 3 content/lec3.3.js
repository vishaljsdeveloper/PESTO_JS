//.call(dynamic context) :-
//.call :- The call() method calls a function with a given this value and arguments provided individually.
//EX=
function greet() { 
// this = obj 
var reply = 
[ this.animal,
 'typically sleep between', 
 this.sleepDuration ].join(' ');
  console.log(reply); 
// return reply; bhi le sakte hai lekin tab niche gree.call ko console.log karna parega 
}
var cats = { 
    animal : 'cats', 
    sleepDuration : '12 and 16 hours' 
}; 
var dogs = { 
    animal : 'dogs', 
    sleepDuration : '2 to 5 hours' 
}; 
greet.call(cats); // cats typically sleep between 12 and 16 hours
greet.call(dogs); 