import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import { Topbar } from './Topbar';


export const Signin = () => {
    let [email,setEmail] = useState()
    let [password,setPassword] = useState()
    let navigate = useNavigate()
    
    let handleSubmit =async () =>{
       try {
        event.preventDefault()
          let value = {
            email:email,
            password:password
          }
          
          let res = await AxiosService.post(`${ApiRoutes.Sign_in.path}`,value,{
            authenticate:ApiRoutes.Sign_in.authenticate
          })
          
          
          if(res.status===200){
           sessionStorage.setItem("role",res.data.role)
           sessionStorage.setItem("id",res.data.id)
           sessionStorage.setItem("token",res.data.token)
           toast.success("login successfull")

           if(res.data.role==="admin"){
                navigate("/admin")
           }
           else{
            console.log("usersssssss")
                 navigate("/user")
           }
          }
        
       } catch (error) {
        console.log(error.response.data.message)
         toast.error(error.response.data.message)
       }
    }

    useEffect(()=>{
      sessionStorage.clear()
    },[])
   
  return <>
  <Topbar></Topbar>
  <div className='container mt-5 col-lg-4'>
    <h3 className='h3 text-center mb-2'>Sign in to continue</h3>
    <form onSubmit={()=>handleSubmit()}>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" onChange={()=>{setEmail(event.target.value)}}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password" onChange={()=>{setPassword(event.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  
  </div>
  </>
}
