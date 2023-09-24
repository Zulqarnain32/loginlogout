import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Navbar = () => {
  const handleLogout = () => {
    console.log("logout button is clicked");
    window.localStorage.clear();
    axios.get('http://localhost:5000/logout')
    .then(result => {
         window.location.reload();
         console.log("token is clear " + result);
    }).catch(err => console.log(err))
  }

  return (
    <>
      <div className="navbar-container">
        <div className="link-side">
          <Link className='nav-links main-title' to = "/">Food Recipe</Link>  
          <Link className='nav-links' to = {window.localStorage.length > 0 ? "/secret":"/auth/register"}>Secret</Link>  
        </div>  
      
       { 
         window.localStorage.length > 0 ? 
           <Link to="/">
              <button className="register-side" onClick={handleLogout}>Logout</button>
           </Link>  
          :
           <Link to="/auth/register">
              <button className="register-side">Register</button>
           </Link>  
       }
       
      </div> 
    </>
  )
}

export default Navbar
