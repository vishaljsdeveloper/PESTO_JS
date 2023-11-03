//JS BASICS

// Expressions versus Statements:- Statements ="do things." A program is a sequence of statements.var x; 
//• Expressions produce values. 3 * 6 •
//  Example
//if statement
//   var x;
//    if (y >= 0) {
//         x = y; 
//     }
//      else {
//           x = -y; 
//         } 
//ternary expression: it has to produce a result
//         var x = y >= 0 ? y : -y;


// Semicolons :
// Semicolons are optional in JavaScript.
//  • However, I recommend always including them, because otherwise JavaScript can guess wrong about the end 
//  of a statement.
//  Semicolons terminate statements, but not blocks. • 
//  There is one case where you will see a semicolon after a block:-
//   a function expression is an expression that ends with a block.here we will use semicolon in block


// Variables and Assignment •
//  Variables in JavaScript are declared before they are used using var keyword. 
//  • You can declare a variable and assign a value at the same time 
//  var foo = 6;
//foo= 4; // change variable foo. Identifiers and Variable Names Identifiers are names that play various syntactic roles in JavaScript.
//• Roughly, the first character of an identifier can be any Unicode letter, a dollar sign ($), or an underscore ().
//• Subsequent characters can additionally be any Unicode digit. (except reserved words.)