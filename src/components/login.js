import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from './firebase';
import LoginHeader from "./loginHeader";
import NavBarL from "./loginNavBar";
import '../css/login.css'
import pic from '../images/hotelmg.jpg'
import Footer from "./footer";

export default function Login() {
    const navigate = useNavigate();


    const handleRegister = (() => {
        navigate("/register")
    })
    // const handleHome = (() => {
    //     navigate("/home")
    // })



const[email,setEmail]=useState('');
const[password,setPassword]=useState('')



const handleLogin=(()=>
{
    if(document.getElementById("email").value==="" && 
    document.getElementById("password").value==="")
    {
        document.getElementById("err1").style.display = "block";
        document.getElementById("err2").style.display = "block";

    }
    else if(document.getElementById("email").value==="")
    {}
    else
     if(document.getElementById("password").value==="")
     {
        document.getElementById("err2").style.display = "block";
 
     }else{
signInWithEmailAndPassword(auth,email,password).then((userCredential)=>
{
    const user = userCredential.user;
    navigate('/home')
    // alert("Admin successfully logged in")
}).catch((error)=>{
    console.log(error)
})        
}
})
    return (
        <div className="">
            <NavBarL />
            <LoginHeader />
            <div className="signInContainer">
                <div className="imgContainer">
                    <img src={pic} alt="Avatar" className="avatar"></img>
                </div>
                <div className="infoContainer">
                    <h1 className="regH1">Login</h1>
                    <input id="email" placeholder="Please input your email" onChange={(e)=>setEmail(e.target.value)}/>
                    <span className="errorSpan" id="err1">Username is required!!! </span>
                    <input id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <span className="errorSpan"  id="err2">Password is required!!! </span>
                    <button id="btnSignIn" onClick={handleLogin} >Sign In</button>
                    <br></br>
                    <span>Don't have an account?<span onClick={handleRegister}> Register here</span> </span>

                </div>

            </div>
            <Footer />
        </div>

    );
}