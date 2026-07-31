
const orders = [   
    
    {
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

// orders.map((el) => {
//     console.log(el.items);
    
// })


// let phonecust =  orders.find((el,i)  =>{
//       return el.items.find(e=>e.product=="Phone")
      
// })

// console.log(phonecust);

// const aa = orders.filter((item) => item.items.some((e) => e.product === "Phone")).map((order) => order.customer)
// console.log(aa);

//  const phoneCus = orders.filter((order) => order.items.some((item => item.product === "Phone"))).map(order => order.customer)
//  console.log(phoneCus);

//  const findMethod = orders.find((item) => item.items.find((e) => e.product === "Phone")).customer
//  console.log(
//     findMethod
//  );
 
const customer = orders
    .filter(order => order.items.find(item => item.product === "Phone"))
    .map(order => order.customer);

// console.log(customer);

const highValueCustomers = orders.filter(order => {
    const total = order.items.reduce((sum, item) => sum + item.price, 0);
   return total>30000
});

// console.log(highValueCustomers.map((cus) => cus.customer));

const inventory = [
    {
        id: "P1",
        name: "Imported Cheese",
        price: 200,
        stock: 5
    },
    {
        id: "P2",
        name: "Organic Milk",
        price: 100,
        stock: 12
    },
    {
        id: "P3",
        name: "Dark Chocolate",
        price: 120,
        stock: 0 // Out of stock!
    },
    {
        id: "P4",
        name: "Olive Oil",
        price: 500,
        stock: 3
    }
];

const saleItems = inventory.filter(item => {
    const discountedPrice = item.price * 0.9;
    if (item.stock > 0 && discountedPrice > 100) {
        return item;
    }
});
// console.log(saleItems);

console.log(saleItems.map(e => e.name));

const developers = [
    {
        id: 101,
        name: "Aarav",
        yearsExperience: 5,
        isActive: true,
        skills: ["JavaScript", "React", "Node.js"]
    },
    {
        id: 102,
        name: "Neha",
        yearsExperience: 2, // Less than 3 years!
        isActive: true,
        skills: ["Python", "Django"]
    },
    {
        id: 103,
        name: "Rohan",
        yearsExperience: 4,
        isActive: false, // Inactive!
        skills: ["Java", "Spring", "Docker"]
    },
    {
        id: 104,
        name: "Priya",
        yearsExperience: 6,
        isActive: true,
        skills: ["React", "TypeScript", "Node.js"] // Notice duplicate skills like React and Node.js
    }
];

const devSkills = developers
  .filter(dev => dev.isActive && dev.yearsExperience >= 3)
  .map(dev => dev.skills);

console.log(devSkills.flat());
const flaten = devSkills.flat()
const unique = [...new Set(flaten)]
console.log(unique);

// Output: [ ["JavaScript", "React", "Node.js"], ["React", "TypeScript", "Node.js"] ]