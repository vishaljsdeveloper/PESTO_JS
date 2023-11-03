//Higher Order Function :-(also learn polyfill)
//forEach 
//filter 
//map 
//sort 
//reduce 
const companies = [{ name: "Google", category: "Product Based", start: 1981, end: 2004 },
{ name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
{ name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
{ name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
{ name: "Mindtree", category: "Service Based", start: 1989, end: 2010 }];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//1. forEach
//agar for each loop na use karke simple for loop use kare tab aise karenge.
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
    console.log(companies[i].name);
}
//samething using forEach to redudce code redundancy
console.log('USING FOR EACH')
companies.forEach(function (company, index) {
    console.log(company);
    console.log(company.name);
})
//using arrow function
console.log('USING FOR EACH with arrow function')
companies.forEach((company, index) => {
    console.log(index, company.name);
})
//using arrow function in one line
console.log('USING FOR EACH with arrow function in one line')
companies.forEach((company, index) => console.log(index, company.name))

//2.filter :- agar mujhe wahi age dekhna hai jo 20 se jada hai to filter lagayenge
//using normal way without filter:-
console.log('PRINTING AGE ABOVE 20 WITHOUT USING FILTER');
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 20) {
        console.log(`${i} is index of ${ages[i]}`);
    }
}
//using  filter:-
console.log('PRINTING AGE ABOVE 20 USING FILTER');
ages.filter(function (age) {
    if (age > 20) {
        console.log(age);
    }
})
//using  filter 2nd way:-
console.log('PRINTING AGE ABOVE 20 USING FILTER 2nd WAY');
const storing = ages.filter(function (age) {//isme bhi index use kar sakte hai
    if (age > 20) {
        return true;
        //  return age; // is se bhi aayga lekin true se kaise aa raha hai
    }
})
console.log(storing);//output will be in the form of array. yaha humwo  sab element ko jo ki 20 se jada hai
//use  storing variable me store kar rahe hai.  fir badme console kar rahe hai.
//using  filter 3rd way:-
console.log('PRINTING AGE ABOVE 30 USING FILTER AND ARROW FUNCTION');
const finalAge = ages.filter(age => age > 30);
console.log(finalAge);
//using  filter IN COMPANIES to get only service bsed companies:-
console.log('PRINTING ONLY SERVICED BASED COMPANY');
const sb = companies.filter(function (company) {
    if (company.category === "Service Based") {
        return true;
        // return company;//ye bhi kar sakte hai. uper jitna tarika use hua hai sab kar sakte hai
    }
})
console.log(sb);

//3. map function
console.log('USING MAP FUNCTION');
companies.map((company, index) => {
    console.log(company, index)
});
console.log('USING MAP FUNCTION with RETURN');
const dummy = companies.map((company, index) => {
    return `${company.name} ${company.category}`
});
console.log(dummy);

//4. SORT
console.log('USING SORT FUNCTION TO SORT IN ASCENDING ORDER');
const sorted = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
})
console.log(sorted);

console.log('USING SORT FUNCTION TO SORT IN DESCENDING ORDER');
const sorted1 = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1; //c1 ya c2 return karne pe kaam nai kar raha hai
    } else {
        return -1;
    }
})
console.log(sorted1);

console.log('USING SORT FUNCTION with ARROW function and TERNARY operator TO SORT IN ASCENDING ORDER');
const sorted2 = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sorted2);

console.log('USING SORT FUNCTION with ARROW function TO SORT ages IN ASCENDING ORDER');
const sortedage = ages.sort((a, b) => a - b);//isko if a-b return true likh kar check karna
console.log(sortedage);
console.log('USING SORT FUNCTION with ARROW function TO SORT ages IN DESCENDING ORDER');
const sortedage1 = ages.sort((a, b) => b - a);
console.log(sortedage1);

console.log('USING SORT FUNCTION with ARROW function AND MINUS OPERATOR TO SORT IN DESCENDING ORDER');
const sorted3 = companies.sort((c1, c2) => (c2.start - c1.start));//aise bhi kar sakte hai
console.log(sorted3);

console.log('USING SORT FUNCTION with ARROW function and ternary operator TO SORT ages IN DESCENDING ORDER');
const sortedage2 = ages.sort((a, b) => (a < b ? 1 : -1));//aise bhi kar sakte hai
console.log(sortedage2);

//5.REDUCE
//using normal way without reduce:-
console.log('adding AGE  WITHOUT USING REDUCE');
let total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];
}
console.log(total);
console.log('adding AGE  USING REDUCE');
const sumage = ages.reduce(function (total, age) {
    return total + age;
}, 0);//yaha jo zero pass kiye hai wo total ka initial value hai
console.log(sumage);
console.log('adding AGE USING REDUCE AND ARROW FUNCTION');
const sumage1 = ages.reduce((total, age) => total + age, 0);
console.log(sumage1)