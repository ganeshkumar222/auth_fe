import React from 'react'
import { useState } from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import {toast }from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export const Change = () => {
    let [newPassword,setNewPassword] = useState()
    let [cpassword,setCpassword] = useState()
    let navigate = useNavigate()

    let handleSubmit = async () =>{
        try {
          event.preventDefault()
          let id = sessionStorage.getItem("id")
          if(newPassword===cpassword){
            let value ={
              id:id,
              password:newPassword
            }
            let res = await AxiosService.put(`${ApiRoutes.change_password.path}`,value,{
              authenticate:ApiRoutes.change_password.authenticate
            })
            if(res.status===200){
              toast.success("password changed successfully")
              navigate("/")
            }
          }
          else{
            toast.error("passwords dont match")
          }
         
        } catch (error) {
          toast.error(error.response.data.message) 
        }
       }

  return <><div className='container mt-5 col-lg-4'>
  <h3 className='h3 text-center mb-2'>New Password</h3>
  <form  onSubmit={()=>handleSubmit()} >
  {/* onSubmit={()=>handleSubmit()} */}


<div className="mb-3">
  <label htmlFor="newpassword" className="form-label">Enter Your New password</label>
  <input type="password" className="form-control" id="newpassword"  onChange={()=>{setNewPassword(event.target.value)}} />
</div>

<div className="mb-3">
  <label htmlFor="cpassword" className="form-label">Enter Your New password</label>
  <input type="password" className="form-control" id="cpassword"  onChange={()=>{setCpassword(event.target.value)}} />
</div>

<button type="submit" className="btn btn-primary" >Submit</button>
</form>


</div></>
}
