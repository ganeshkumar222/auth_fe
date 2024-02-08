import React, { useEffect, useState } from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { toast } from 'react-toastify';
import { UseLogout } from '../hooks/UseLogout';
import { Topbar } from './Topbar';

export const AdminDashboard = () => {
  let [data,setData] = useState([])
  let logout  = UseLogout()

 let getData = async () =>{
  try {
    let res = await AxiosService.get(`${ApiRoutes.get_users.path}`,{
      authenticate:ApiRoutes.get_users.authenticate
    })
    if(res.status===200){
      setData(res.data.data)
    }

  } catch (error) {
    toast.error(error.response.message)
    if(error.response.status===402){
       logout()
    }
  }
 }

 let handleDelete = async (id) =>{
  try {
    console.log(id)
    let res = await  AxiosService.delete(`${ApiRoutes.delete_users.path}/${id}`,{
      authenticate:ApiRoutes.delete_users.authenticate
    })
    if(res.status===200){
      toast.success("student deleted successfully")
      getData()
    }
    
  } catch (error) {
    toast.error("internal server error")
    // toast.error(error.response)
    // if(error.response.status===402){
    //    logout()
    // }
  }
 }

  useEffect(()=>{
     getData()
  },[])
  return <>
  <Topbar></Topbar>
  <div className='container text-center'>
  <h5 className='h5 mb-5'>Admin Dashboard</h5>
    <table  className='table'>
    <thead>
      <tr>
          <td>#</td>
          <td>Name</td>
          <td>email</td>
          <td>role</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>


      {data.map((e,i)=>{
          return <tr key={e._id}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.role}</td>
            <td><button className="btn btn-danger" onClick={()=>{(handleDelete(e._id))}}>Delete user</button></td>
          </tr>
        })}
      </tbody>
    </table>
     
      
        
      
   

  </div>
  </>
}
