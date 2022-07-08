import React from 'react'
import './Landing.css';

const Login = () => {
    return <div className='login-form'>
            <div>
                <h2>Username:</h2>
                <input type="text"></input>
             </div>
             <div>
                <h2>Password:</h2>
                <input type="password"></input>
             </div>
             <button>log in</button>
        </div>
}

export default Login