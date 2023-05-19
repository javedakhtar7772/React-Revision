import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const[loggedIn, setLoggedIn]= useState(false)  
  const showLoggedOption = () => {
    if(loggedIn)
      return<button className='btn btn-primary' >Logout</button>
    else
      return<button className='btn btn-danger'onClick={()=>{setLoggedIn(true)}} >Login</button>
  }
  return (
    
    <div className='p-3' style={{boxShadow: "0px 3px 5px 7px #0002"}} >
        <div className='d-flex align-items-center' >
            <h3>Logo</h3>
            <NavLink className='nav-link mx-3' to='/home'>Home</NavLink>
            <NavLink className='nav-link mx-3' to='/login'>Login</NavLink>
            <NavLink className='nav-link mx-3' to='/event'>Event</NavLink>
            <NavLink className='nav-link mx-3' to='/state'>State</NavLink>
        </div>
        <div>
          {
            showLoggedOption()
          }
        </div>
    </div>
    
  )
}

export default Navbar;