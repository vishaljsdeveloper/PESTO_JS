//call back:-
// Pretend that this response is coming from the server. 
const students = [{ name: "harry", subject: "JavaScript" },
{ name: "Rohan", subject: "Machine Learning" }];

// function enrollStudent (student) { 
// setTimeout(function() { 
// students.push(student);
// console.log('student is added') 
// }, 3000); 
// }

// function getStudents(){
//     setTimeout(() => {
//         let str = " ";
//         students.forEach(function(student){
//             str+= `${student.name}`;
//         });
//         document.getElementById('students').innerHTML=str;
//         console.log('sudent is fetched');
//     }, 2000);
// }

// newStudent = {name:'vishu',subject:'react'}
// enrollStudent(newStudent);
// getStudents(); aise me alag alag call hoga . ab hum get student ko enoroll me pass karenge
function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log('student is added')
        callback();
    }, 3000);
}

function getStudents() {
    setTimeout(() => {
        let str = " ";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;//agar bas str= use karna hai document.gebi ko foreach loop
            // ke andar use karna hoga
        });
        document.getElementById('students').innerHTML = str;
        console.log('sudent is fetched');
    }, 2000);
}

newStudent = { name: 'vishu', subject: 'react' }
enrollStudent(newStudent, getStudents);