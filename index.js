const fs = require("fs");

const student = [];

student.push({
    rollNumber:1,
    name:"Jane Doe",
    gender: "female",
    class:"2nd Grade",
    section:"A",
    totalMarks:90.00
},{
    rollNumber:2,
    name:"John Doe",
    gender: "female",
    class:"2nd Grade",
    section:"B",
    totalMarks:80.50
});

fs.writeFileSync("jsondata.json",JSON.stringify(student));
console.log(JSON.stringify(student));