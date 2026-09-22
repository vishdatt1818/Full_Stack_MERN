
const express = require("express")
const app = express()
const moment = require('moment');
const auth = require("./Server/middleware/auth")
require("dotenv").config();

const router = require("./Server/routes/ApiRoutes")
const seed = require("./Server/config/seed");
const companyRouter = require("./Server/routes/CompanyRoutes");
// seed()


const port = 5002
const db = require("./Server/config/db");
const adminRoute = require("./Server/routes/AdminRoutes");



app.use(express.json())
app.use(express.urlencoded())



app.get("/",(req , res) =>{
  return res.sendFile("/ server");
})

app.use("/api", router)
// app.use(auth)

app.use("/admin", adminRoute)
app.use("/company", companyRouter)

app.listen(port, (err) =>{
    if(err){
        console.log("error in server");
        
    }else{
        console.log("server is running ");
        
    }
})