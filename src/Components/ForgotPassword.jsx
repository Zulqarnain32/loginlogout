import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/forgot-password',{email})
    .then(res => {
        console.log(res);
        setError(res.data.message)
        
    }).catch(err => {console.log(err);
    })
  }
  return (
    <>
      <div className="registration-container">
        <div className="register-sub-box">
          <form onSubmit={handleSubmit}>
            <h1 className="title">Forgot Password 😢</h1>

            <h3>Email</h3>
            <input
              type="text"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              //  required
            />
           
            <button type="submit">Send</button>
            <p className="error">{error}</p>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
