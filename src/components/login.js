import React from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./loginHeader";
import NavBarL from "./loginNavBar";
import '../css/login.css'
import pic from '../images/hotelmg.jpg'
import Footer from "./footer";

export default function Login() {
    const navigate = useNavigate();

 
const handleRegister=(()=>
{
    navigate("/register")
})
    const handleHome = (() => {
        navigate("/home")
    })

    return (
        <div className="home">
            <NavBarL />
            <LoginHeader />
            <div className="signInContainer">
                <div className="imgContainer">
                    <img src={pic} alt="Avatar" className="avatar"></img>
                </div>
                <div className="infoContainer">
                    <h1>Login</h1>
                    <input id="email" placeholder="Please input your email" />
                    <input id="password" placeholder="Password" />

                    <button id="btnSignIn" onClick={handleHome} >Sign In</button>
                    <br></br>
                    <span>Don't have an account?<span onClick={handleRegister}> Register here</span> </span>

                </div>

            </div>
            <Footer/>
        </div>
      
    );
}