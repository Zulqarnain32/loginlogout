import React, { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()
    axios.defaults.withCredentials = true
   useEffect(() => {
    axios.get("http://localhost:5000/verify")
    .then(result => {
        console.log(result.data);
        if(result.data.status){
            navigate("/dashboard")

        }else {
            navigate("/")
        }
        
    }).catch(err => {console.log(err)
    })

   },[])
  return (
    <>
      <h1>Authorized user can accessed it</h1>
    </>
  )
}

export default Dashboard
