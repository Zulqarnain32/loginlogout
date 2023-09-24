import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Secret from './Components/Secret'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/secret" element = {<Secret/>}/>
          <Route path = "/auth/register" element = {<Registration/>}/>
          <Route path = "/auth/login" element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
