import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UseLogout } from '../hooks/UseLogout'

export const Topbar = () => {
  let location= useLocation()
  let [brand,setBrand] = useState("")
  let logout = UseLogout()
  let navigate = useNavigate()
  let getData = ()=>{
    console.log(location.pathname)
    if(location.pathname==="/admin"){
      setBrand("Admin")
    }
    else if(location.pathname ==="/user"){
      setBrand("User")
    }
    else if(location.pathname ==="/signup"){
      setBrand("Registration")
    }
    else{
      setBrand("Login")
    }
   
  }
  useEffect(()=>{
    getData()

  },[])
  return <>
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{brand}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>{navigate("/signup")}}>{brand==="Admin"?"Add user":"register"}</a>
        </li>
        
       
        
      </ul>
      <form className="d-flex">
       
        <button className="btn btn-outline-success" type="submit" onClick={()=>{logout()}}>logout</button>
      </form>
    </div>
  </div>
</nav>
  </>
  
}
