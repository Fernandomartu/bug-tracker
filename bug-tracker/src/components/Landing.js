import React,{useState} from 'react'
import './Landing.css';
import Login from './LoginForm'
import SignUp from './SignUpForm';



const Landing = () => {

  

    const [showLogin, setShowLogin] = useState(true);
    return <div className='landing-form'>
        {
            showLogin ? <Login /> :  <SignUp />
        }
        <button onClick ={() => setShowLogin(true) }>Log in</button>
        <button onClick={() => setShowLogin(false) }>Sign Up</button>
    </div>
}

export default Landing