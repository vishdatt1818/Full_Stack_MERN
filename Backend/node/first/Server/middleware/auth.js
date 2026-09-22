const jwt = require("jsonwebtoken")

const auth = async (req , res ,next) =>{
    try{
        const token = req.headers?.["authorization"]
        // console.log(token);
        
        if(token){
        
            const user = jwt.verify(token, process.env.JWT_SECRET)
            console.log(user);
            req.token  = user
            next()
            

        }else{
            res.status(401).json({message : "no token provided"})
        }

    }catch(err){
        console.log(err);
        
            res.status(403).json({message : "invalid or expired token"})

    }
}
module.exports = auth