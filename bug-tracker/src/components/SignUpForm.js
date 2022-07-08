import React,{useState} from 'react'
import Axios from 'axios'
import './Landing.css';



const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addUser = () => {
         Axios.post('http://localhost:3000/create', {username: username, email: email, password: password
      }).then(() => {console.log("success")});
    }

    return <div className='sign-up-form'>
            <div>
                <h2>Username:</h2>
                <input onChange={(event) => {setUsername(event.target.value)}} type="text"></input>
             </div>
             <div>
                <h2>Email:</h2>
                <input onChange={(event) => {setEmail(event.target.value)}} type="text"></input>
             </div>
             <div>
                <h2>Password:</h2>
                <input onChange={(event) => {setPassword(event.target.value)}} type="password"></input>
             </div>
             <button onClick={addUser}>sign up</button>
        </div>
}

export default SignUp