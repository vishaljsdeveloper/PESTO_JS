//CLOSURE
// What is logged?
for (var i = 0; i < 3; i++) { 
    setTimeout(function log() {
         console.log(i); 
        }, 1000); 
        } //output= 3,3,3



    // Why learn about closures? 
    // •Fundamental Concept of JS .
    // •One of the most common type of question in JS Interviews 
    // • Heavily used in React while creating components 
    // • Similar concepts exists in other popular languages such as Python


//SCOPE:-
// An Example
let myName = 'in module Scope';
 function printName() {
      console.log(myName);
       } 
    printName();
    myName='name changed';
    printName();

    //Nesting of Scopes 
    let myNamee = 'arfat'; 
     function printer (addExclamation) { 
         function printName() { 
             let newName = myNamee; 
             if (addExclamation) { 
             newName = myNamee + '!';
            }
            console.log(`old name = ${myNamee}`);
            console.log(`New name = ${newName} `); 
            };
            return printName;//ye function printer ke pas chala jayga   
        }
        const printNameFn = printer (true);//false karke bhi check karo
        printNameFn();
        myNamee = 'another name';
        printNameFn();


        // Lexical (Static) scope :
        //  In static scoping, an identifier refers to its nearest lexical environment.
        // "Lexical" can be understood as "nesting of scopes that is visible by looking at the source code"
        //EX=
        let myName2 = 'arfat';
        function scopel() { 
        let valofScopel = 1;
        return function innerScope() { //inner function khud ke scope ko access karega sabse pehle
 //uske bad apne parents ko or uske bad global scope ko . agar parent ka parent hoga to usko karega  global se pehle.
        let valofInnerScope =2;
        console.log(`${valofScopel} and ${valofInnerScope}`); 
         };
         }
         const innerFn = scopel();
         innerFn();


        //  Closures 
        //  A closure refers to the ability of a function to :
        //  • remember its lexical parent scope 
        //  • has read/write access to variables defined in the parent environment 
        //  EX=

         function a() { 
          var x = 5;
          return function () { 
              console.log(x);
            }; 
        }
        var x = 10;//ye nai lega jab tak hum x=5 ko comment na kar de kyunki child function pehle apne scope 
        //me check karega x uske bad apne parent me or last me global me check karega .agar global me bhi 
        //X 1 bar se jada bar  declared hai to jaha se function call hoga thik uske uper jo x declared hoga wo value lega
        const b = a();
         b();

