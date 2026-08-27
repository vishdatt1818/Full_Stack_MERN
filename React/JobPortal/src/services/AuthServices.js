import axios from "axios"
import { BASEURL, CUSTOMERLOGIN } from "../endpoints"


export const CustomerLogin = async(data) => {
   return await axios.post(BASEURL+CUSTOMERLOGIN,data)
}

export const setData = (data) =>{
     localStorage.setItem("token",data.token)
    localStorage.setItem("_id",data.data._id)
    localStorage.setItem("email",data.data.email)
    localStorage.setItem("name",data.data.name)
    localStorage.setItem("userType",data.data.userType)
    localStorage.setItem("IsLogin",true)
    
}

export const getIsLogin = () =>{
   return localStorage.getItem("IsLogin")
}
export const getUserType = () =>{
   return localStorage.getItem("userType")
}
export const clear = () =>{
   return localStorage.clear()
}