const express = require("express")
const app = express()
const moment = require('moment');

const prot = 5001

const db = require("./Server/config/db")

let products = [
  {
    "id": "prod-001",
    "name": "Wireless Noise-Canceling Headphones",
    "category": "Electronics",
    "price": 199.99,
    "stock": 45,
    "status": "in_stock",
    "createdAt": "2026-01-15T08:30:00.000Z"
  },
  {
    "id": "prod-002",
    "name": "Ergonomic Mesh Office Chair",
    "category": "Furniture",
    "price": 249.50,
    "stock": 12,
    "status": "in_stock",
    "createdAt": "2026-02-03T11:15:00.000Z"
  },
  {
    "id": "prod-003",
    "name": "Stainless Steel Water Bottle (1L)",
    "category": "Fitness & Outdoors",
    "price": 24.99,
    "stock": 120,
    "status": "in_stock",
    "createdAt": "2026-02-20T14:45:00.000Z"
  },
  {
    "id": "prod-004",
    "name": "Mechanical Gaming Keyboard",
    "category": "Electronics",
    "price": 89.99,
    "stock": 0,
    "status": "out_of_stock",
    "createdAt": "2026-03-10T09:00:00.000Z"
  },
  {
    "id": "prod-005",
    "name": "Organic Arabica Coffee Beans (1kg)",
    "category": "Groceries",
    "price": 18.50,
    "stock": 75,
    "status": "in_stock",
    "createdAt": "2026-04-05T16:20:00.000Z"
  },
  {
    "id": "prod-006",
    "name": "Smart Fitness Tracker Watch",
    "category": "Electronics",
    "price": 59.95,
    "stock": 3,
    "status": "low_stock",
    "createdAt": "2026-05-12T10:10:00.000Z"
  },
  {
    "id": "prod-007",
    "name": "Non-Stick Ceramic Frying Pan",
    "category": "Home & Kitchen",
    "price": 34.99,
    "stock": 30,
    "status": "in_stock",
    "createdAt": "2026-06-01T13:00:00.000Z"
  },
  {
    "id": "prod-008",
    "name": "Waterproof Backpack (30L)",
    "category": "Accessories",
    "price": 49.99,
    "stock": 0,
    "status": "out_of_stock",
    "createdAt": "2026-06-18T17:35:00.000Z"
  },
  {
    "id": "prod-009",
    "name": "LED Desk Lamp with Wireless Charger",
    "category": "Furniture",
    "price": 39.99,
    "stock": 18,
    "status": "in_stock",
    "createdAt": "2026-07-22T09:50:00.000Z"
  },
  {
    "id": "prod-010",
    "name": "Noise-Isolating Earbuds",
    "category": "Electronics",
    "price": 15.00,
    "stock": 2,
    "status": "low_stock",
    "createdAt": "2026-08-14T12:05:00.000Z"
  }
]

let students = [

  {
    "name": "Arshpreet Singh",
    "dob": "2005-03-15",
    "joiningDate": "2026-01-10T09:30:00",
    "lastLogin": "2026-09-03T08:45:00"
  },
  {
    "name": "Aman Kumar",
    "dob": "2004-07-22",
    "joiningDate": "2026-02-15T10:00:00",
    "lastLogin": "2026-09-02T18:20:00"
  },
  {
    "name": "Simran Kaur",
    "dob": "2006-01-05",
    "joiningDate": "2026-03-01T09:15:00",
    "lastLogin": "2026-09-03T09:10:00"
  },
  {
    "name": "Rahul Sharma",
    "dob": "2003-11-18",
    "joiningDate": "2025-12-20T11:30:00",
    "lastLogin": "2026-09-01T16:40:00"
  },
  {
    "name": "Neha Verma",
    "dob": "2005-05-30",
    "joiningDate": "2026-04-12T10:45:00",
    "lastLogin": "2026-08-30T14:25:00"
  },
  {
    "name": "Karan Singh",
    "dob": "2002-09-12",
    "joiningDate": "2025-11-05T08:30:00",
    "lastLogin": "2026-09-03T07:55:00"
  },
  {
    "name": "Priya Sharma",
    "dob": "2006-12-25",
    "joiningDate": "2026-05-18T09:00:00",
    "lastLogin": "2026-08-28T19:10:00"
  },
  {
    "name": "Gurpreet Singh",
    "dob": "2004-02-14",
    "joiningDate": "2026-01-25T10:30:00",
    "lastLogin": "2026-09-02T12:15:00"
  },
  {
    "name": "Anjali Gupta",
    "dob": "2005-08-08",
    "joiningDate": "2026-06-10T11:00:00",
    "lastLogin": "2026-09-03T10:05:00"
  },
  {
    "name": "Harpreet Kaur",
    "dob": "2003-06-19",
    "joiningDate": "2025-10-15T09:45:00",
    "lastLogin": "2026-08-29T17:30:00"
  }
]



app.get("/lastLogin",(req,res) =>{

    let name =  req.query.name.toLowerCase()
     let ageCal = students.filter((stu) =>{
         return stu.name.toLowerCase().includes(name)
        
    })

    const results = ageCal.map((student) => {
    const isToday  = moment(student.joiningDate).isSame(moment(),"day");
    return {
       name: student.name,
        lastLogin: student.lastLogin,
        isLoggedInToday: isToday

    }
})

res.send(results)
})


app.get("/dateSinceJoining",(req,res) =>{


    let name =  req.query.name.toLowerCase()
     let ageCal = students.filter((stu) =>{
         return stu.name.toLowerCase().includes(name)
        
    })

    const results = ageCal.map((student) => {
    const yearsSinceJoining = moment().diff(moment(student.joiningDate), "days");
    return {
       name: student.name,
            joiningDate: student.joiningDate,
            daysSinceJoining: yearsSinceJoining

    }
})

res.send(results)
})


app.get("/ageSince",(req,res) =>{


    let name =  req.query.name.toLowerCase()
     let ageCal = students.filter((stu) =>{
         return stu.name.toLowerCase().includes(name)
        
    })

    const results = ageCal.map((student) => {
    const age = moment().diff(moment(student.dob, "YYYY-MM-DD"), "years");
    return {
        name : student.name,
        age : age,
        dob : student.dob

    }
})

res.send(results)
})

app.get("/nameSearch",(req,res) =>{
    let name = req.query.name.toLocaleLowerCase()
     let searchName = products.filter((pro) =>{
        return pro.name.toLowerCase().includes(name)
    })
    res.send(searchName)
})

app.get("/priceLess",(req,res) =>{
    let price = req.query.price
     let priceLess = products.filter((pro) =>{
        return pro.price < price
    })
    res.send(priceLess)
})

app.get("/stock",(req,res) =>{
    let stock = req.query.stock
     let stockLess = products.filter((pro) =>{
        return pro.stock < stock
    })
    res.send(stockLess)
})

app.get("/status",(req,res) =>{
     let status = null
    if (req.query.status == "1") {
        status = "in_stock"

}else if(req.query.status == "2"){
    status = "low_stock"
}
    
    else if(req.query.status == "3") {
        status = "out_of_stock"

    }
    // let status = req.query.status
     let statusCheck = products.filter((pro) =>{
        return pro.status == status
    })
    res.send(statusCheck)
})

app.get("/sort",(req,res) =>{
    let sort = req.query.sort

    let sortedProducts = [...products]

    if(sort === "asc" || sort === "desc"){
        sortedProducts.sort((a,b) => {
            let dateA = new Date(a.createdAt)
            let dateB = new Date(b.createdAt)

            return sort === "asc" ? dateA - dateB : dateB - dateA
        })
    }
     
    let formattedProducts = sortedProducts.map((pro) => {
        return {
            ...pro,
            createdAt: new Date(pro.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            })
        }
    })

    res.send(formattedProducts)
    // res.send(sortedProducts)
})



app.get("/",(req,res) =>{
    res.send("welco dddddd page")
})
app.get("/personal",(req,res) =>{
    res.send({name: "vishnu"
        
    })
})
app.get("/hobbies",(req,res) =>{
    res.send({hobbies:"cricket"})
})
app.get("/acadamics",(req,res) =>{
    res.send({degree:"bba"})
})
app.get("/futurGoals",(req,res) =>{
    res.send({goal:"fullstackdeveloper with ai"})
})

app.listen(prot, (err) =>{
    if(err){
        console.log("error in server");
        
    }else{
        console.log("server is running ");
        
    }
})