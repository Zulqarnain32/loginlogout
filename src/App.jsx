import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
