import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useCookies } from 'react-cookie'
const Navbar = () => {
      const [cookies, setCookies] = useCookies(["access_token"]);
  
  const handleLogout = () => {
    console.log("logout button is clicked");
    setCookies("access_token","")
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
          <Link className='nav-links' to = "/dashboard">Dashboard</Link>  
        </div>  
        {!cookies.access_token ? 
         <Link to="/auth/register">
         <button className="register-side" >Register</button>
      </Link> :
         <Link to="/">
         <button className="register-side" onClick={handleLogout}>Logout</button>
      </Link> 
        }
      
           
          
           
       
      </div> 
    </>
  )
}

export default Navbar
