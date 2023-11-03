// // JAVASCRIPT TYPE SYSTEM

// Static vs Dynamic:
//  In the context of language semantics and type systems, "static" usually means "at compile time"
//   or "without running a program",
//    while "dynamic" means "at runtime".
//    EX=
//    // static 
//    var a = 10;//we can say that its a number type and its value is 10 without executing the program
//     function foo() { } ////we can say that its a function type without executing the program
//     //! dynamic 
//     var a= Math.random();//we can say that its a number type but we cant say its value without executing the program.


//     Static typing versus dynamic typing 
//     • In a statically typed language, variables, parameters and members of objects 
//     (JavaScript calls them properties) have types that the compiler knows at compile time. 
//     • The compiler can use that information to perform type checks and to optimize the compiled code.
//     EX=
//     //in Java IT IS STATIC typing because we declare the data type of variable at compile time.
//     int a 10; 
//     int a = 23;
//     string firstName = 'arfat';
//     //! in JavaScript  it is dynamic typing because we can chage the type of declared variable as shown below
//     var a = 10; 
//     a = 'arfat';


//     Static type checking(java,c++) versus dynamic type checking (javascript,pyhon)
//     • If you have type information, you can check whether a value that is transported to another location
//      (via a function call, an assignment, etc.) has the correct type. 
//      • Statically type-checked languages perform this kind of check at compile time, 
//      dynamically type-checked languages at runtime. 
//      • A language can be both statically type-checked and dynamically type-checked.
//      note:- typescript gives the benefit of static type checking as we have to declare data type and 
//      it will check the type at the compile time.


//      JS types 
//       JS has 6 (5 primitive + 1 object in ES5. in es6 symbol is added) types that are dynamically typed 
//       and (mostly) dynamically typed checked. 
      
//       Coercion 
//       In JavaScript, the main way of dealing with a value whose type doesn't fit is to coerce it to the correct type.
//        Coercion means implicit type conversion. 
//        Most operands coerce : > 
//        '3'*'4'
//         12//output. string will multiply in javascript because javascript will change its datatype to number on our
//         //behalf which is called as implicit type coercion


//         ==VS ===
//         Strict equality (===) and strict inequality (!==) consider only values that have the same type to be equal. 
        
//         Normal (or "lenient") equality (==) and inequality (!=) try to convert values of different types before 
//         comparing them as with strict (in)equality. 
//         1 > undefined == null// true 
//         2> 1 == true //true 
//         3> 0 == false //true 
//         4>'' == false // true 
//         5> '1' == true // true
//         all 1,2,3,4,5 are false in case of === because data type is different.