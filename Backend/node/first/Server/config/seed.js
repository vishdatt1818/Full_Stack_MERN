
const UserModel = require("../apis/user/userModel")
const saltRounds = 10;
const bcrypt = require('bcrypt');



const seed = async () => {
   try{

       
       const hashedPassword = await bcrypt.hash("123", saltRounds);
       let adminObj = new UserModel()

        adminObj.name = "admin"
        adminObj.email = "admin@gmail.com"
        adminObj.role = "admin"
        adminObj.password = hashedPassword


        const adminData = await adminObj.save()

        
     console.log(adminData);
    

   }catch(err){
        console.log(err);
        
   }
    
          

}

module.exports = seed