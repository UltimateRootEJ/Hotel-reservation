import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import { auth,db } from './firebase';
import { collection } from "firebase/firestore";
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


const handleForgotPass=(()=>{
    const collectionRef = collection(db, "users");
    sendPasswordResetEmail(auth, email).then((userCredentials) => {
        console.log(email)
    })
    
})


const handleResetPass = async () => {
    document.querySelector(".reset").style.display = "block";
}
const close = () => {
    document.querySelector(".reset").style.display = "none";
}

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
                    <span  onClick={handleResetPass}>Forgot password?<span> Reset here</span> </span>
                    <br></br>
                    <span onClick={handleRegister}>Don't have an account?<span > Register here</span> </span>


                    <div className="reset" style={{display:'none'}}>
                            
                            <h2 className="close" onClick={close}>
          x
        </h2>{" "}
        <br></br>
        <h2>Reset password</h2>
        <br></br>
        <input
       
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>{" "}
        <br></br> 
        <br></br>
        <br></br>
        <br></br>

        {/* <input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleChange}
        />*/}
        <button
          className="btnSignIn"
          onClick={handleForgotPass}
        
        >
          Reset
        </button> 
                    </div>

                </div>

            </div>
           
        </div>

    );
}