const Schema = require("./student_pb");

const fs = require("fs");


const jane = new Schema.Student();


jane.setRollnumber(1);
jane.setName("Jane Doe");
jane.setGender(proto.Student.GENDER_TYPE.FEMALE);
jane.setClass("2nd Grade");
jane.setSection("A");
jane.setTotalmarks(90);




const john = new Schema.Student();

john.setRollnumber(2);
john.setName("John Doe");
john.setGender(proto.Student.GENDER_TYPE.MALE);
john.setClass("2nd Grade");
john.setSection("B");
john.setTotalmarks(85);



const students = new Schema.Students();

students.addStudents(jane);
students.addStudents(john);


const bytes = students.serializeBinary();
console.log("binary " + bytes);
fs.writeFileSync("studentsbinary", bytes);


const students2 = Schema.Students.deserializeBinary(bytes);

console.log(students2.toString());