import axios from "axios"
import { BASEURL, CATEGORYADD, CATEGORYALL, CATEGORYSINGLE, CATEGORYUPDATE, GetToken } from "../endpoints"


export const categoryAll = async() => {
    return await axios.post(BASEURL+CATEGORYALL)
}

export const categoryAdd = async(data) => {
    return await axios.post(BASEURL+CATEGORYADD,data,GetToken())
}
export const categorySingle = async(data) => {
    return await axios.post(BASEURL+CATEGORYSINGLE,data,GetToken())
}
export const categoryUpdate = async(data) => {
    return await axios.post(BASEURL+CATEGORYUPDATE,data,GetToken())
}