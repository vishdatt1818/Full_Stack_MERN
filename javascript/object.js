const students = [
    { id: 1, name: "Alice", age: 17, grade: "A", marks: 88, extraCurricularPoints: 3 },
    { id: 2, name: "Bob", age: 18, grade: "B", marks: 76, extraCurricularPoints: 4 },
    { id: 3, name: "Charlie", age: 19, grade: "A", marks: 82, extraCurricularPoints: 2 },
    { id: 4, name: "David", age: 17, grade: "C", marks: 91, extraCurricularPoints: 1 },
    { id: 5, name: "Eva", age: 18, grade: "B", marks: 90, extraCurricularPoints: 5 },
    { id: 6, name: "Frank", age: 16, grade: "A", marks: 78, extraCurricularPoints: 6 },
    { id: 7, name: "Grace", age: 18, grade: "B", marks: 84, extraCurricularPoints: 2 },
    { id: 8, name: "Hassan", age: 17, grade: "D", marks: 74, extraCurricularPoints: 4 },
    { id: 9, name: "Isha", age: 17, grade: "A", marks: 79, extraCurricularPoints: 3 },
    { id: 10, name: "Jack", age: 18, grade: "B", marks: 65, extraCurricularPoints: 5 },
];

const sumMarks = students.filter((stu) => stu.grade === "A").reduce((total , cv) => {
    return total + cv.marks
}, 0)
console.log(sumMarks);



const filterStudent = students.filter((stu) => stu.marks >= 75 && (stu.grade === "A" || stu.grade === "B") && stu.age >= 18)

// console.log(filterStudent);

const newstu = filterStudent.map((stu) => ({

    name:stu.name,

    meritScore: stu.marks + (stu.extraCurricularPoints * 2)
    
}))
console.log(newstu);

const sortedstu = newstu.toSorted((a,b) => b.meritScore - a.meritScore).slice(0,3)

// console.log(sortedstu);



const stuRanking = students.map((stu) => {
    let rank;
    if(stu.marks > 80) rank = "excellent"
    else if(stu.marks > 60) rank = "Average"
    else rank = "Below Average"
    return { ...stu, rank}
})
// console.log(stuRanking);

const name = students.map((stu) => `<li>${stu.name}</li>` )

// console.log(name);

// const div = document.getElementById("container")
// div.innerHTML = name


