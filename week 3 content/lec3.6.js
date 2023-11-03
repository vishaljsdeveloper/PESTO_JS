//CONTEXTUAL FORMATS

//NEW BINDING
//NEW KEYWORD IS used as a constructor mechanism. when a function is executed with the new keyword , it behaves
//as a constructor and when it exexuted normally with the paranthesis then it behave as a normal function.

// "new" binding 
// • Constructor functions "construct" objects. They are equivalent to classes in other languages. 
// • Since JavaScript has no concept of a class (even though it has class keyword), functions rise up to the task. 
// • A function, when used with the new operator, is called a constructor function. The new operator changes 
// the behavior of the function.
//Whenever we use a this keyword with new then its scope becomes an empty object and this empty object gets all the
//property and it also write return this . so these 2 things happen implicitly, we dont write this things
//EX=
function person (name){
    //scope of this = {} an empty object. internally ho raha hai
 this.name = name; 
 //return this; internally ho raha hai
}
const person1 = new person ('Arfat');
 console.log(person1, typeof person1); // Person { name : 'Arfat'} , object

//  In DOM event handler :- 
//  this is set to the element the event fired from
// target= element that triggered event; 
// currentTarget = element that listens to event.
//dom ka example chhor diya hai dekh lena badme kyunki usme html file use kiya hua tha. basically jis element me 
//event listener laga hua hoga , usi ko "this" ka scope point karega.

// In an inline event handler When the code is called from an inline on-event handler,
//  its this is set to the DOM element on which the listener is placed 

// In ES6 modules:-this is bound to undefined  and in ES5 it is bound to global/window
//  <script src="script.js" type="module"></script>
//  In Node CJS modules :-  this is bound to the exports obejct
