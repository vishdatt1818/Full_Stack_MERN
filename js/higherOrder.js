 const students = [
    { name: "Ridhi", marks: 90 },
    { name: "Aman", marks: 45 },
    { name: "Simran", marks: 75 },
    { name: "Karan", marks: 32 },
    { name: "Priya", marks: 88 }
];

const passedStu = students.filter((stu) => stu.marks >= 50).map((stu) => stu.name)
// console.log(passedStu);

const failedStu = students.filter((stu) => stu.marks < 50)
// console.log(failedStu.length);

const average = students.reduce((acc, curr) => acc+ curr.marks,0 )
// console.log(average/5);

total = 0
for(let i=0; i<students.length; i++){
    // console.log(students[i]);
   
    total += students[i].marks
    
}
// console.log(total/5);

const products = [ 
 { name: "Laptop", price: 60000 },
 { name: "Phone", price: 30000 }, 
 { name: "Mouse", price: 1000 } 
];

const name = products.map((item) => item.name)
// console.log(name);

const newPrice = products.map((item) => item.price + (item.price * 10/100))
// console.log(newPrice);

const upper = products.map((item) =>  item.name.toUpperCase())
// console.log(upper);


const employees = [    { id: 1, name: "Riya", salary: 50000 },
    { id: 2, name: "Aman", salary: 25000 },
    { id: 3, name: "Simran", salary: 70000 },
    { id: 4, name: "Rahul", salary: 20000 },
    { id: 5, name: "Priya", salary: 65000 }
];

const salary = employees.filter((emp) => emp.salary > 40000)
// console.log(salary);

const salary1 = employees.filter((emp) => emp.salary > 40000 && emp.salary < 70000)
// console.log(salary1);

const startWith = employees.filter((emp) => emp.name.includes("R"))
// console.log(startWith);



const users = [ 
 { id: 101, name: "Ridhi" },
 { id: 102, name: "Aman" }, 
 { id: 103, name: "Simran" },
 { id: 104, name: "Karan" } 
];

const id = users.filter((user) => user.id === 103)
// console.log(id);

const userName = users.find((user) => user.name === "Aman" )
console.log(userName);

const notFound = users.find((user) => user.id === 101)
if(notFound){
console.log("userfound",notFound);

}
else{
    console.log("user not found")
}


const orders = [    {
        id: 1,
        customer: "Ridhi",
        items: [
            { product: "Laptop", price: 60000 },
            { product: "Mouse", price: 1000 }
        ]
    },
    {
        id: 2,
        customer: "Aman",
        items: [
            { product: "Phone", price: 30000 },
            { product: "Charger", price: 1500 }
        ]
    },
    {
        id: 3,
        customer: "Simran",
        items: [
            { product: "Keyboard", price: 2500 }
        ]
    }
];
 const cName = orders.map((user) => user.customer)
 console.log(cName);

  const totalPrice = orders.filter((order) =>{ 
    const total = (order.items.reduce((acc, cuItem) => acc + cuItem.price ,0))
    return total>30000
    // return{
    //     ...order,totalPrice:total
    // }
    //  console.log(`${order.customer}: ₹${total}`);
})
 console.log("totalPrice",totalPrice);

 
 const totall = orders.forEach(order => {
  const total = order.items.reduce((acc, citem) => acc + citem.price, 0);
//   console.log(`${order.customer}: ₹${total}`);
});

 const phone = orders.map((order) => order.items.filter(pro => pro.product == "Phone"))
 console.log("phone" ,phone);

 const phoneCus = orders.filter((order) => order.items.some((item => item.product === "Phone"))).map(order => order.customer)
 console.log(phoneCus);
 


 



