
import React from 'react';
import '../css/navbar.css'
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = (() => {
    navigate("/register")
  })
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">McFarlaneBooking</span>
      </div>
    </div>
  )
}



// const handleSearch = () => {
//   navigate("/hotels", { state: { destination, date, options } });
// };
// <button className="headerBtn" onClick={handleSearch}>
//                 Search
//               </button>
//                   const navigate = useNavigate();
