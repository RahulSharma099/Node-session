var student1 = {
    name: "Varun",
    age: 19,
    school: "DPs",
    subjectList: ["maths", "physics", "chemistry"],
    marks: [90, 80, 90],
    printDetails: () => {
        console.log(student1.name + " " + student1.age + " " + student1.school);
    },
};

var student2 = {
    name: "Riju",
    age: 20,
    school: "school2",
    subjectList: ["maths", "physics", "chemistry"],
    marks: [90, 70, 85],
    printDetails: () => {
        console.log(student2.name + " " + student2.age + " " + student2.school);
    },
};
var student3 = {
    name: "Anish",
    age: 21,
    school: "school3",
    subjectList: ["maths", "physics", "chemistry"],
    marks: [10, 20, 30],
    printDetails: () => {
        console.log(student3.name + " " + student3.age + " " + student3.school);
    },
};

function print(obj) {
    obj.printDetails();
    console.log((obj.marks[0] + obj.marks[1] + obj.marks[2]) / 3);
}

print(student1);
print(student2);
print(student3);