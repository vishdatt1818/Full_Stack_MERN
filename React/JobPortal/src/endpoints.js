export const BASEURL = "https://kizaapi.ksesystem.com/"

export const GetToken=()=>{
    let token=localStorage.getItem("token")
    let obj={Authorization:token}
    return {headers:obj}
    
}

export const ADDCUSTOMER = "api/user/add"
export const UPDATECUSTOMER = "api/user/update"
export const SINGLECUSTOMER = "api/user/single"
export const ALLCUSTOMER = "api/user/all"

export const CATEGORYADD="api/category/add"
export const CATEGORYALL="api/category/all"
export const CATEGORYSINGLE = "api/category/single"
export const CATEGORYUPDATE ="api/category/update"

export const CUSTOMERLOGIN="api/user/login"


export const GNEWS="https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=f8f8ae94d102be36afa5821d878e9f2e"





