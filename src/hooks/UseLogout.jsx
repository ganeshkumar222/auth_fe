import { useNavigate } from "react-router-dom";

import React from 'react'

export const UseLogout = () => {
   let  navigate = useNavigate()
  return ()=>{
    sessionStorage.clear()
    navigate("/signin")
  }
}
