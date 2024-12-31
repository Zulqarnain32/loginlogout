import React, { useState } from 'react'
import { Link,useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const ResetPassword = () => {

    
    const [ password,setPassword ] = useState("")
    const {token} = useParams()
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()    
        axios.post('http://localhost:5000/reset-password/'+token,{password})
        .then(result => {
            console.log(result);
            
          
        }).catch(err => console.log(err))
    }

  return (
    <>
      <div className="registration-container">
        <div className="register-sub-box">
         <form onSubmit={handleSubmit}>
           <h3 className="title">Reset Password</h3>  
            
           
           <h3>New Password</h3>
            <input 
             type="text"
             placeholder='Password'
             onChange={(e) => setPassword(e.target.value)}
            //  required
           /> 
           <button type='submit'>Reset Password</button>
           {/* <p className='error'>{error}</p> */}

         </form>
        </div>  
      </div> 
    </>
  )
}

export default ResetPassword
