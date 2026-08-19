import axios from "axios"
import { BASEURL, CATEGORYALL } from "../endpoints"


export const categoryAll = async() => {
    return await axios.post(BASEURL+CATEGORYALL)
}