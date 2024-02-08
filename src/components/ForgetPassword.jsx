import React, { useEffect, useState } from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export const ForgetPassword = () => {
  let [email,setEmail] = useState()
//   let [email,setEmail]
let navigate = useNavigate()
  

let handleSubmit= async ()=>{
   try {
    event.preventDefault()
    let value = {
        email:email
    }

    let res = await AxiosService.put(`${ApiRoutes.forget_password.path}`,value,{
        authenticate:ApiRoutes.forget_password.authenticate
    })
    if(res.status===200){
        toast.success("email sent successfully")
        navigate("/")
    }
    
   } catch (error) {
     toast.error("error")
   }
}

  return <><div className='container mt-5 col-lg-4'>
  <h3 className='h3 text-center mb-2'>forget password</h3>
  <form  onSubmit={()=>handleSubmit()} >
  {/* onSubmit={()=>handleSubmit()} */}

<div className="mb-3">
  <label htmlFor="email" className="form-label">Email</label>
  <input type="email" className="form-control" id="email" value={email} onChange={()=>{setEmail(event.target.value)}}/>
</div>



<button type="submit" className="btn btn-primary" >Submit</button>
</form>


</div></>
}
