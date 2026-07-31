const employees = [
  { id: 1, name: "John", dept: "IT", salary: 60000 },
  { id: 2, name: "Alice", dept: "HR", salary: 45000 },
  { id: 3, name: "Bob", dept: "IT", salary: 80000 },
  { id: 4, name: "David", dept: "Sales", salary: 50000 },
  { id: 5, name: "Tom", dept: "IT", salary: 70000 },
  { id: 6, name: "Emma", dept: "HR", salary: 90000 }
];

const it = employees.filter(emp => emp.dept == "IT")
// console.log(it);

const salSort = employees.sort((a , b) => b.salary-a.salary)
// console.log(salSort);

const itSalary = employees.filter(emp => emp.dept == "IT").reduce((acc , curr) => acc+ curr.salary,0)
// console.log(itSalary);

const print = employees.filter(emp => emp.dept == "IT").map((emp) => 
    console.log(`${emp.name} : earns ${emp.salary}`))


const students = [
  { name: "Ridhi", marks: 92 },
  { name: "Aman", marks: 35 },
  { name: "Simran", marks: 81 },
  { name: "Raj", marks: 60 },
  { name: "Karan", marks: 29 },
  { name: "Priya", marks: 99 }
];

const passedStu = students.filter((stu) => stu.marks>=40)
// console.log(passedStu);

const sortMarks = students.sort((a,b) => b.marks-a.marks)
// console.log(sortMarks);

const addGrade = students.map((stu) => {
    if(stu.marks >=90){
        stu.grade="A"
    }else if(stu.marks >=75){
        stu.grade = "B"
    }else{
        stu.grade ="C"
    }
    return stu
})
// console.log(addGrade);

const passedStuAvg = students.filter((stu) => stu.marks>=40).reduce((acc,curr) => acc +curr.marks, 0)
// console.log(passedStuAvg/students.length);

const products = [
  { name: "Laptop", price: 70000, stock: 5 },
  { name: "Mouse", price: 800, stock: 0 },
  { name: "Keyboard", price: 1500, stock: 8 },
  { name: "Phone", price: 30000, stock: 4 },
  { name: "Monitor", price: 12000, stock: 2 },
  { name: "Tablet", price: 25000, stock: 0 }
];

const onlyInstok = products.filter((item) =>  item.stock>0)
// console.log(onlyInstok);

const sortProducts = onlyInstok.sort((a , b) => b.price - a.price)
// console.log(sortProducts);

const nameOnly = products.map((item) => item.name)
// console.log(nameOnly);

// If you NEED to create a variable: Use {} and write return.

const inventoryValue = sortProducts.map((item) =>{
    
     total =  item.price*item.stock
     return{
        ...item, inventoryValue:total
     }
    
    })
// console.log(inventoryValue);

// If you DO NOT need a variable: You can skip the variable entirely and use () to return the object directly.

// const inventoryValue = sortProducts.map((item) =>(

     
//      {
//         ...item, inventoryValue:item.price*item.stock
//      }
    
// ))
// console.log(inventoryValue);

// Quick SummaryCreating variables?  Use {} with an explicit return.
// No variables, just returning an object?  Use () for a clean 1-liner.




const employees1 = [
  { name: "John", dept: "IT", salary: 50000 },
  { name: "Alice", dept: "HR", salary: 60000 },
  { name: "Bob", dept: "IT", salary: 70000 },
  { name: "David", dept: "Sales", salary: 40000 },
  { name: "Emma", dept: "HR", salary: 55000 },
  { name: "Tom", dept: "IT", salary: 80000 }
]

const hr = employees1.filter((emp) => emp.dept == "HR")
console.log(hr);

const It = employees1.filter((emp) => emp.dept == "IT")
// console.log(hr);

const sales = employees1.filter((emp) => emp.dept == "Sales")
// console.log(hr);

const avgSalaryhr = hr.reduce((acc, curr) =>
    {
        const total = ( acc + curr.salary , 0)
        return{
        
        }

    })

const groupByDept = Object.groupBy(employees1, (emp) => emp.dept)
console.log(groupByDept);

const avgSal = Object.entries(groupByDept).reduce((acc,[dept, emp]) => {
    const total = emp.reduce((sum, curr) => sum + curr.salary ,0)
    acc[dept] = total/emp.length
    return acc

},{})
console.log(avgSal);

const highestPaid = Object.entries(groupByDept).reduce((acc, [dept, emp]) => {
    const salarySort = emp.reduce((sum ,curr) => sum+ curr.salary,0)
})



