import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { getIsLogin, getUserType } from '../../../services/AuthServices'

const ProtectiveLayout = () => {

    const nav = useNavigate()

    useEffect(() =>{

        const IsLogin = getIsLogin()

        if(getUserType === 1){
            nav("/admin")
        }else{
            nav("/login")
        }
    },[])
  return (
    Outlet
  )
}

export default ProtectiveLayout
