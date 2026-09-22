

const adminAuth  = async (req , res, next) => {
   if(req.token?.role != "admin"){
    return res.json({
        status:403,
        success:false,
        message: "You dont have admin access"
    })

   }
   
   next()

}
module.exports = adminAuth