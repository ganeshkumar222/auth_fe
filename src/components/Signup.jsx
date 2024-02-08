
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ApiRoutes from '../utils/ApiRoutes';
import AxiosService from '../utils/AxiosService'
import { Topbar } from './Topbar';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
  let [email,setEmail] = useState()
  let [password,setPassword] = useState()
  let [name,setName] = useState()
  let [code,setCode] = useState()
  let navigate = useNavigate()
  

  let handleSubmit =async () =>{
     try {
      event.preventDefault()
        let value ={}
        value.name = name
        value.password = password
        value.email = email
        if(code === "123"){
          value.role = "user"
        }
        else if(code === "456"){
          value.role = "admin"
        }
        
        let res = await AxiosService.post(`${ApiRoutes.sign_up.path}`,value,{
          authenticate:ApiRoutes.sign_up.authenticate
        })
       
        if(res.status === 200){
          toast.success("student created successfully")
          navigate("/")
        }
      
     } catch (error) {
       toast.error(error)
     }
  }
  
return <>
<Topbar></Topbar>
<div className='container mt-5 col-lg-4  col-sm-12 col-md-6'>
  <h3 className='h3 text-center mb-2'>Registration</h3>
  <form onSubmit={()=>handleSubmit()}>
  <div className="mb-3">
  <label htmlFor="Name" className="form-label">Name</label>
  <input type="text" className="form-control" id="Name" onChange={()=>{setName(event.target.value)}}/>
 
</div>
<div className="mb-3">
  <label htmlFor="Email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="Email" onChange={()=>{setEmail(event.target.value)}}/>
 
</div>
<div className="mb-3">
  <label htmlFor="Password" className="form-label">Password</label>
  <input type="password" className="form-control" id="Password" onChange={()=>{setPassword(event.target.value)}}/>
</div>
<div className="mb-3">
  <label htmlFor="code" className="form-label">Code</label>
  <input type="text" className="form-control" id="code" onChange={()=>{setCode(event.target.value)}}/>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>


</div>
</>
}
