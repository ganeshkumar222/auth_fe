import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Update = () => {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let {id} = useParams()
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
            setName(res.data.value.name)
            setEmail(res.data.value.email)
          }
          
        } catch (error) {
          toast.error(error.response.data.message)
          
        }
      }

    let handleSubmit = async () =>{
    try {
        let value = {
            name:name,
            email:email
        }
       
        let res = await AxiosService.put(`${ApiRoutes.edit_users.path}/${id}`,value,{
            authenticate:ApiRoutes.edit_users.autheticate
        })
        if(res.status===200){
            toast.success("details edited successfuly")
            navigate("/user")
        
        }
        
    } catch (error) {
        toast.error("internal server error")
    }
    }


    useEffect(()=>{
        getData()
    },[])


  return <>
  <div className='container mt-5 col-lg-4'>
    <h3 className='h3 text-center mb-2'>Update Details</h3>
    <form onSubmit={()=>handleSubmit()}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} id="name" onChange={()=>{setName(event.target.value)}}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" value={email} onChange={()=>{setEmail(event.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  
  </div>
  </>
}
