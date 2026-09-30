const UserModel = require("./userModel")
const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
// const userModel = require("./userModel");
const sendMailer = require("../../utilities/emailSender")
const privateKey=process.env.PRIVATE_KEY





const login = async (req, res) => {
    try {
        const formData = req.body || {};
        let validation = "";

        if (!formData.email) {
            validation += "email is required, ";
        }
        if (!formData.password) {
            validation += "password is required, ";
        }

        if (validation) {
            return res.status(400).json({
                success: false,
                message: validation 
            });
        }

        const candidate = await UserModel.findOne({ email: formData.email });

        if (!candidate) {
            return res.status(404).json({
                success: false,
                message: "No such user"
            });
        }

        const passwordMatch = await bcrypt.compare(formData.password, candidate.password);

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Password does not match"
            });
        }

        const payload = {
            id: candidate._id,
            email: candidate.email,
            role:candidate.role
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET, 
            { expiresIn: "1d" }       
        );  

//          let payloadformail = {
//                 subject: "User login",
//                 html: `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
//         <h2 style="color: #28a745;">Registration Successful!</h2>

//         <p>Hello <strong>${candidate.name}</strong>,</p>

//         <p>
//             Your account has been successfully login.
        
//         </p>

//         <a href="http://localhost:3000/login"
//            style="
//                background:#007bff;
//                color:#fff;
//                padding:12px 20px;
//                text-decoration:none;
//                border-radius:5px;
//            ">
//             Login Now
//         </a>

//         <p style="margin-top:30px;">
//             Thank you for registering with us.
//         </p>
//     </div>
// `
//             }

//           sendMailer(candidate.email, payloadformail )


           

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token : token,
            data: candidate

        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error: " + err.message
        });
    }
};

const changePassword = async (req, res) =>{
    try{
         const formData = req.body || {};
        let validation = "";

        // if (!formData.email) {
        //     validation += "email is required, ";
        // }
        if (!formData.oldPassword) {
            validation += "password is required, ";
        }

        if (validation) {
            return res.status(400).json({
                success: false,
                message: validation 
            });
        }

        if (req.body.newPassword == req.body.confirmPassword) {
            let { email } = req.token

            let userData = await userModel.findOne({ email })

            let result = await bcrypt.compare(req.body.oldPassword, userData.password)

            if (result) {

                userData.password = await bcrypt.hash(req.body.newPassword, 10)

                let savedData = await userData.save()
                res.send({
                    message: "Your password has been changed",
                    success: true,
                    status: 200,
                    data:savedData
                })

            } else {
                res.send({
                    message: "Your Old password is incorrect",
                    success: false,
                    status: 400
                })
            }


        } else {
            res.send({
                message: "New Password and Confirm password not match",
                success: false,
                status: 400
            })
        }



    }catch(err){
        console.log(err);
        
         return res.status(500).json({
            success: false,
            message: "Internal Server Error: " + err.message
            
        });
    }
}

const otpGen = async (req, res) => {
    try {
        let { email } = req.body

        let userData = await UserModel.findOne({ email })

        if (userData.length <= 0) {
            return res.json({
                status: 404,
                massge: "User Not Found",
                success: false
            })
        }



        let otp = Math.floor(Math.random() * 1000000)
        let ExpTime = Date.now() + 5 * 60 * 1000

        userData.otp = otp
        userData.expireOtp = ExpTime

        await userData.save()

        res.send({
            massage: "otp Genrated",
            success: true,
            status: 200,
            otp: otp
        })
    } catch (err) {
        console.log(err);

    }
}

const verifyOTP = async (req, res) => {
    try {
        let { email, OTP, newPassword } = req.body


        let userData = await UserModel.findOne({ email })

        if (userData == null) {
            return res.json({
                status: 404,
                massge: "User Not Found",
                success: false
            })
        }

        if (userData.expireOtp < Date.now()) {
            return res.json({
                status: 403,
                massge: "OTP EXP",
                success: false
            })
        }


        if (userData.otp != OTP) {
            return res.json({
                status: 403,
                massge: "OTP is Not Valid",
                success: false
            })
        }

        let result = bcrypt.compareSync(newPassword, userData.password)
        if (result) {
           return res.json({
                massage: "New Password is same as Old password",
                status: 200,
                success: true

            })
        }

        userData.password = bcrypt.hashSync(newPassword, 10)
        userData.otp = null
        userData.expireOtp = Date.now()

        await userData.save()

        res.json({
            massage: "You password Has been changed",
            status: 200,
            success: true

        })

    } catch (error) {
        console.log(error);

    }
}




module.exports = { login, changePassword, otpGen , verifyOTP }










