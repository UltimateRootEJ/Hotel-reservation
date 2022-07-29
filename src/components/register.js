import LoginHeader from './loginHeader'
import NavBarL from './loginNavBar'
import '../css/register.css'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth, db } from './firebase'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'



export default function Register() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [location, setLocation] = useState('')

    const navigate = useNavigate();


    const handleLogin = (() => {
        navigate("/")
    })

    const handleRegister = (() => {
        const collectionRef = collection(db, "users");
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const userr = userCredentials.user;
        })
        const user = {
            name: name,
            surname: surname,
            email: email,
            userId: auth.currentUser.uid,
            location: location

        };
        console.log(user.userId)
        addDoc(collectionRef, user).then(() => {
            alert("added successfully")
        }).catch((error) => { console.log(error); alert("Error while adding") })


    })





    // navigate("/login")

    return (
        <div >
            <NavBarL />
            <LoginHeader />
            <div className="registerDiv">
                <h1 className='regH1'>Register</h1>
                <input type="text" placeholder='Please enter your name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Please enter your surname' onChange={(e) => setSurname(e.target.value)} />
                <input type="email" placeholder='Please enter your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Please enter Location' onChange={(e) => setLocation(e.target.value)} />
                <input type="password" placeholder='Please enter your password' onChange={(e) => setPassword(e.target.value)} />

                <button className="btnReg" onClick={handleRegister} >Register</button>
                <br></br>
                <span>Don't have an account?<span onClick={handleLogin}> Login here</span> </span>
            </div>
        </div>
    )
}