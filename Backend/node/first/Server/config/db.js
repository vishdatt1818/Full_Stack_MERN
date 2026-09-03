const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fullStack").then(() =>{
    console.log("db Conected");
    
}).catch((err) =>{
    console.log(err);
    
})