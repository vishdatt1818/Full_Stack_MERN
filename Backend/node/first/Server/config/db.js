const mongoose = require("mongoose")

mongoose.connect("mongodb://vishsaini1818_db_user:pDULXVQkwPigOArC@ac-ji9sap5-shard-00-00.vmusuyn.mongodb.net:27017,ac-ji9sap5-shard-00-01.vmusuyn.mongodb.net:27017,ac-ji9sap5-shard-00-02.vmusuyn.mongodb.net:27017/fullStack?ssl=true&replicaSet=atlas-wbzetm-shard-0&authSource=admin&appName=Cluster0").then(() =>{
// mongoose.connect("mongodb://vishsaini1818_db_user:pDULXVQkwPigOArC@cluster0.vmusuyn.mongodb.net/fullStack").then(() =>{
    console.log("db Conected");
    
}).catch((err) =>{
    console.log(err);
    
})