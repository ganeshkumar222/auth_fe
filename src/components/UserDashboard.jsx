import React, { useEffect, useState } from 'react'
import { Topbar } from './Topbar'
import { toast } from 'react-toastify'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { UseLogout } from '../hooks/UseLogout'
import { useNavigate } from 'react-router-dom'

export const UserDashboard = () => {
  let [data,setData] =  useState({})
  let logout = UseLogout()
  let navigate = useNavigate()
  
  let getData = async ()=>{
    let id = sessionStorage.getItem("id")
    try {
      let res = await AxiosService.get(`${ApiRoutes.get_users.path}/${id}`,{
        authenticate:ApiRoutes.get_users.authenticate
      })
      // console.log(res.status)
      if(res.status===200){
        console.log(res.data.value)
        setData(res.data.value)
      }
      
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===402){
        logout()
     }
    }
  }
  let handleUpdate = () =>{
    let id = sessionStorage.getItem("id")
    navigate(`/update/${id}`)
  }
  let handleChange = ()=>{
    let id= sessionStorage.getItem("id")
    navigate(`/changepassword/${id}`)
  }
  useEffect(()=>{
     getData()
  },[])
  return <>
  <Topbar></Topbar>
  <div className='container mt-2 text-center col-6'>
    <h3 className='h3  mb-1'>User profile</h3>
    <div className='card mt-5 shadow'>
      <div className='text-center'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" className="card-img-top mt-1" alt="..." style={{width:"15em"}}/>
      </div>
      <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p className="card-text">Email:{data.email}</p>
      <button className='btn btn-primary m-1' onClick={()=>{handleChange()}}>change password</button>
      <button  className='btn btn-primary m-1' onClick={()=>{navigate(`/forget/${data.email}`)}}>forget password</button>
      <a href="#" className="btn btn-primary m-1" onClick={()=>{handleUpdate()}} >UpdateDetails</a>
     
    </div>
  </div>
  </div>
  
  
  </>
}
