import axios from "axios"
import { ADDCUSTOMER, BASEURL, UPDATECUSTOMER } from "../endpoints"


export const CustomerAdd = async(data) => {
   return await axios.post(BASEURL+ADDCUSTOMER,data)
}

export const CustomerUpdate = async(data) => {
   return await axios.post(BASEURL+UPDATECUSTOMER,data)
}

export const NEWSG = async(data) => {
   return await axios.post(BASEURL+UPDATECUSTOMER,data)
}



