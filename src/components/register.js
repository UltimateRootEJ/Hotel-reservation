import LoginHeader from './loginHeader'
import NavBarL from './loginNavBar'
import '../css/register.css'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth, db } from './firebase'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'



export default function Register()
{const[email,setEmail]=useState('');
const[password,setPassword]=useState('')
const[name,setName]=useState('');
const[surname,setSurname]=useState('')
const navigate=useNavigate();
 
const handleRegister=(()=>
{
const collectionRef=collection(db,"users");
createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
    const userr=userCredentials.user;
    const user={
        name:name,
        surname:surname,
        email:email,
  
    };
    addDoc(collectionRef, user).then(()=>{
        alert("added successfully")
    }).catch((error)=>{console.log(error);alert("Error while adding")})
})

})




        
        // navigate("/login")
    
    return(
        <div >
            <NavBarL />
                <LoginHeader />
              <div className="registerDiv">
                <input type="text" placeholder='Please enter your name'onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder='Please enter your surname'onChange={(e)=>setSurname(e.target.value)}/>
                <input type="email" placeholder='Please enter your email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Please enter your password' onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" placeholder='Re-type enter your password'/>
                <button onClick={handleRegister} className='btnRegister'>Register</button>
              </div>
        </div>
    )
}