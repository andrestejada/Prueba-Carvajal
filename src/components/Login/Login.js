import React from 'react'
import LoginForm from './LoginForm'
import Navbar from './Navbar'
import './login.scss'

const Login = () => {
    return (
        <>
         <Navbar/>
         <div className='form-container' >
            <LoginForm/>   
         </div>
        </>
    )
}

export default Login
