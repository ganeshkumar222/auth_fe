import  { useEffect, useState } from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export const ChangePassword = () => {
    let [name,setName] = useState()
    let [email,setEmail] = useState()
    let [password,setPassword] = useState()
    let navigate = useNavigate()
    
    let getData = async ()=>{
        let id = sessionStorage.getItem("id")
        try {
          let res = await AxiosService.get(`${ApiRoutes.get_users.path}/${id}`,{
            authenticate:ApiRoutes.get_users.authenticate
          })
          if(res.status===200){
            
            setName(res.data.value.name)
            setEmail(res.data.value.email)
          }
          
        } catch (error) {
          toast.error(error.response.data.message)
          
        }
      }

    let handleSubmit = async ()=>{
        try {
          event.preventDefault()
            let id = sessionStorage.getItem("id")
            let value = {
                id:id,
                password:password
            }
            console.log("inside handle submit")
            let res  = await AxiosService.post(`${ApiRoutes.check_password.path}`,value,{
              authenticate:ApiRoutes.change_password.authenticate
            })
            console.log(res.status)
            if(res.status===200){
              navigate("/change")
            }
            
        } catch (error) {
           toast.error(error.response.data.message) 
        }
    }
    

      useEffect(()=>{
        getData()
      },[])
  return <><div className='container mt-5 col-lg-4'>
    <h3 className='h3 text-center mb-2'>Change password</h3>
    <form  onSubmit={()=>handleSubmit()} >
    {/* onSubmit={()=>handleSubmit()} */}
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} id="name" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" value={email} />
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Enter Your current password</label>
    <input type="password" className="form-control" id="password" value={password} onChange={()=>{setPassword(event.target.value)}} />
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>

  
  </div></>
  
  
  
  
}
