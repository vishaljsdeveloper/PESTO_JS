// Inheritance and Subclassing :-
// In prototype-based languages, inheritance is the mechanism of basing an object or class upon another object.
//using ES5
function Person(name) { 
this.name = name; 
} 
Person.prototype.printName = function () { 
    console.log(this.name); 
}; 
function Employee (name, id) { 
 Person.call(this, name); // acting as super() call 
 this.id = id;
} 
 Object.setPrototypeOf(Employee.prototype, Person.prototype); // object.create se bhi prototype set kar sakte hai.
 Employee.prototype.printId = function () { 
console.log(this.id); 
}; 
const e = new Employee('arfat', 42); 
console.log(e); //agar person.call hata denge to name nai print hoga
e.printId(); 
e.printName();//agar setprototypeof nai karenge to ye print nai hoga

//ES6 CLASSES
// ES6 classes are not something that is radically new : They mainly provide more convenient syntax to create old 
// school constructor functions.
// there is no need of Separator(, or ;).

//refactoring previous code
class Person1 { 
    constructor(name){
    this.name = name; 
    } 
    printName1() { 
        console.log(this.name); 
    }
}
    class Employee1 extends Person1 { 
        constructor(name, id){ 
            super(name);
     this.id = id;
    } 
    printId1() { 
        console.log(this.id); 
        }; 
}
   
    const e1 = new Employee1('vishal', 22); 
    console.log(e1); //agar person.call hata denge to name nai print hoga
    e1.printId1(); 
    e1.printName1();
    console.log(typeof Person1);//function :class bas ek keyword hai jo syntax aasan karne ke liye use kiya hai.
    // semantic abhi bhi wahi hai.

    // Subclassing 
    // • The extends clause lets you create a subclass of an existing constructor (which may or may not have been
    // defined via a class)
    //ex=
    class point {
        constructor(x,y){
            this.x=x;
            this.y=y;
        }
        toString(){//overriding Object.prototype
          return `${this.x} , ${this.y}`;
        }
    }
    class colorPoint extends point{
        constructor(x,y,color){
            super(x,y); //yaha pe super as a method use ho raha hai
            this.color = color;
        }
        toString(){//overriding point.prototype
             return super.toString() + 'in' + this.color; //yaha pe super as a object use ho raha hai
        }
    }
     const e2 = new colorPoint(5,8,'red');
     console.log(e2.toString());

    //  There are two ways of using super : 
    //  ▪ A class constructor uses it like a function call (super(...)), in order to make a 
    //  super constructor call (line A). 
    //  ▪ Method definitions (in object literals or classes, with or without static) use it like property references 
    //  (super.prop) or method calls (super.method(...)), in order to refer to super properties (line B). 
    //  The prototype of a subclass is the superclass

    // • In a derived class, you must call super() before you can use this 
    // • Overriding the reult of a consturctor by returning a object as we have seen earlier. this kaam nai karega
