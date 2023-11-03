// Pretend that this response is coming from the server 
const students = [{ name: "harry", subject: "JavaScript" },
{ name: "Rohan", subject: "Machine Learning" }]

function enrollStudent(Student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(Student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name} is reading ${student.subject}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);//agar time ulta kar denge to dono ek sath run hoga
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
})
      // getStudents();