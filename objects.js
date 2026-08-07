//object
let student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "History"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        Religion: "Christianity"
    }
}
student.name = "Jane Doe"; //modifying the name property
student.age = 21;
console.log(student); //prints "Jane Doe"

let employee = {name : "John Smith", age: 30, position: "Manager", salary: 50000};
employee.position = "Senior Manager";   
const {name, age, position, salary} = employee
console.log(name, age, position, salary); //prints the updated employee object
