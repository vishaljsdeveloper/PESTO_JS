// // var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// // var arr1=[];
// // for(let a=arr.length-1; a>=0; a--){
// //     // console.log(arr[a]);
// //     arr1.push(arr[a])

// // }
// // console.log(arr1);

// // const a = [1, 3, 5, 7, 7, 9];
// // const b = [2, 4, 6, 6, 8, 8, 10];
// //create an array c with all the elements of a nad b sorted and no duplicate.
// //write a function to calculate if a number is prime or not
// //write a function to calculate if a string is pallindrome or not.
// //aaray map, filter, sort,reduce,find

// //question :- create an array c with all the elements of a nad b sorted and no duplicate.
// const a = [1, 3, 5, 7, 7, 9];
// const b = [2, 4, 6, 6, 8, 8, 10];
// //solution:-
// let a1 = a.filter(function (item, index) {
//     if (a.indexOf(item) === index) { // index of hamesha pehla elemnet ko hi dekhta hai to jo bhi second hoga uska 
//         //index match nai karega kyunki indexof pehle wale se check karega. foreach se bhi kar sakte hai
//         return item;
//     }
// })
// console.log(a1);
// let b1 = b.filter(function (item, index) {
//     if (b.indexOf(item) === index) {
//         return item;
//     }
// })
// console.log(b1);
// let c = []
// c = a1.concat(b1);
// console.log(c);
// const sortedC = c.sort((a, b) => a - b);
// console.log(sortedC);

// //question:-write a function to calculate if a number is prime or not
// function primeNumberChecker(number) {
//     let isPrime = true;
//     if (number === 1) {
//         isPrime = false;
//     } else if (number > 1) {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is prime`)
//     } else {
//         console.log(`${number} is not prime`)
//     }
// }

// primeNumberChecker(50);
// primeNumberChecker(5);
// primeNumberChecker(1);
// primeNumberChecker(7);
// primeNumberChecker(9);
// primeNumberChecker(2);

// //try1

// //    function pallindromeChecker(anyString){
// //     let arr=[];
// //     let arr2=[];
// //     for(let char of anyString){
// //         arr.push(char);
// //     }
// //     for(let i=arr.length-1;i>=0;i--){
// //         arr2.push(arr[i]);
// //     }
// //     console.log(arr,arr2)
// //     if(arr===arr2){
// //         console.log('string is a pallindrome');
// //     }else{
// //         console.log('string is not a pallindrome');
// //     }
// //    }
// //    pallindromeChecker('malayalam');
// //    pallindromeChecker('atta');
// //    pallindromeChecker('abhishek');
// //    pallindromeChecker('danish');

// let ar = ['d', 'a', 'n'];
// let ar1 = ['n', 'a', 'd'];
// console.log(ar === ar1);

// //try2
// //    function pallindromeChecker(anyString){
// //     let arr=[];
// //     let arr2=[];
// //     let arr3=[];
// //     for(let char of anyString){
// //         arr.push(char);
// //     }
// //     for(let i=0;i<=arr.length/2-1;i++){
// //         arr2.push(arr[i]);
// //     }
// //     for(let i=arr.length-1;i>=arr.length/2;i--){
// //         arr3.push(arr[i]);
// //     }
// //     console.log(arr2,arr3)
// //     console.log(arr2===arr3)
// //     if(arr3==arr2){
// //         console.log('string is a pallindrome');
// //     }else{
// //         console.log('string is not a pallindrome');
// //     }
// //    }
// //    pallindromeChecker('malayalam');
// //    pallindromeChecker('atta');
// //    pallindromeChecker('abhishek');
// //    pallindromeChecker('danish');

// //try3
// function palindromeCheck(anyString) {
//     let isPalindrome=true;
//     let arr = [];
//     for (let char of anyString) {
//         arr.push(char);
//     }
//     arr.forEach(function(el,index){
//         if(el!==arr[arr.length-1-index]){
//            isPalindrome=false;
//         }
//     })
//     if(isPalindrome){
//         console.log('it is a palindrome')
//     }else{
//         console.log('it is not a palindrome')
//     }

// }
// // palindromeCheck('atta');
// // palindromeCheck('vishal');
// // palindromeCheck('raj');
// // palindromeCheck('malayalam');

// //try4
// // function palindromeCheck(anyString) {
// //     let isPal=true;
// //     let len =anyString.length;
// //     for(let i=0;i<len/2;i++){
// //         if(anyString[i]!==anyString[len -1 -i]){
// //               isPal=false;
// //               break;
// //         }
// //     }
// //     if(isPal){
// //         console.log('it is  a palindrome');
// //     }else{
// //         console.log('it is not  a palindrome');
// //     }

// // }
// // palindromeCheck('atta');
// // palindromeCheck('vishal');
// // palindromeCheck('raj');
// // palindromeCheck('malayalam');

// //try5
// function palindromeCheck(anyString) {
//     const len =anyString.length;
//     for(let i=0;i<len/2;i++){
//         if(anyString[i]!==anyString[len -1 -i]){
//               return 'not a palindrome';
//         }
//     }
//     return 'its a palindrome';

// }
// console.log(palindromeCheck('atta'));
// console.log(palindromeCheck('vishal'));
// console.log(palindromeCheck('malayalam'));
// console.log(palindromeCheck('vishalv'));

// let stMarks={
//     hari:34,
//     vishal:56,
//     RohanDas:64
// }
// console.log("the object is ",stMarks);

const prom= new Promise((resolve, reject) => {
   console.log('h1');
   resolve(20)
}).then(val => {console.log(val)})
console.log('h2');
