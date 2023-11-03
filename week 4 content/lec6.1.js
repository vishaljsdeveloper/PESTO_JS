//Object Descriptor

// Types of Properties:-
//  1.Data Properties:- A data property associates a key value with an JS value.
//  2.Internal Properties :- Double square brackets mark internal properties used by the ECMA specifications.
//   These are properties that JS programmer cannot touch directly from within the code.
//3. Accessor Properties :-
//• An accessor property associates a key value with one or two accessor functions. 
//• The accessor functions are used to store or retrieve a value that is associated with the property.
//getter and setter
//ex=
const accessorObj = {
    get name() { //get karne ke kaam aata hai bina iska () use kiye, simple property ki tarah
        console.log('func was called');
        return 'Arfat';
    }
}
console.log(accessorObj.name); // ⇒ 'Arfat'
console.log(accessorObj.name);

const accessorObj1 = {
    name: 'vishal',
    set setName(value) {//basically jab user dynamically data dega to usko manipulate karne ke bad store kar sakte hai.
        //same chij get name se bhi kar sakte hai lekin wo store hone ke bad manipulate hoga .
        this.name = value.toUpperCase();
    }
}
accessorObj1.setName = 'vishu';
console.log(accessorObj1.name);

//ex=

const accessorObj2 = {
    get name() {
        console.log('fun was called');
        return 'Arfat'; I
    },
    set name(value) { // get or set dono me name same hai kyunki dono milkar ek  property banta hai.
        // ek akela 50% hota hai
        console.log(value);
    },
};
accessorObj2.name = 'raj';//raj
//  console.log(accessorObj2.name);//raj kyu nai aa rha hai

//ex= jo samajh nai aaya
const accessorObj3 = {
    _value: 0,
    get name3() {
        return this._value.toString(2);
    },
    set name3(valu) {
        this._value = valu;
    },
};
accessorObj3.name3 = 256;
console.log(accessorObj3.name3);

