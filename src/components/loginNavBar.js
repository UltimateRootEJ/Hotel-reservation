
import React from 'react';
import '../css/navbar.css'
import { useNavigate } from "react-router-dom";


export default function NavBarL()
{
  const navigate= useNavigate();

  const handleLogin= () => {
    navigate("/login");
  };

  const handleRegister=(()=>{
    navigate("/register")
  })
    return(
        <div className="navbar">
        <div className="navContainer">
          <span className="logo">McFarlaneBooking</span>
        
           
        </div>
      </div>
    )
}
