import LoginHeader from './loginHeader'
import NavBarL from './loginNavBar'
import '../css/register.css'
import { useNavigate } from 'react-router-dom'

export default function Register()
{

    const navigate=useNavigate();

 

    const handleRegister = (() => {
        navigate("/login")
    })
    return(
        <div >
            <NavBarL />
                <LoginHeader />
              <div className="registerDiv">
                <input type="text" placeholder='Please enter your name'/>
                <input type="text" placeholder='Please enter your surname'/>
                <input type="email" placeholder='Please enter your email'/>
                <input type="password" placeholder='Please enter your password'/>
                <input type="password" placeholder='Re-type enter your password'/>
                <button onClick={handleRegister} className='btnRegister'>Register</button>
              </div>
        </div>
    )
}