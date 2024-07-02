import React from 'react'
import './LoginForm.css'
import k from '../assets/Tablet login-pana 1.png'

export const LoginForm = () => {
    return (
        <>

            <div className='container'>
                <div className='split left'>
                    <h1>Student Corner</h1>
                    <p>Where Knowledge Meets Opportunity</p>
                    <div className='image'>
                        <img src={k} alt="Login illustration" />
                    </div>
                </div>
                <div className='split right'>
                    <h1>Login</h1>
                    <div className='wrapper'>
                        <form>
                            <div className='main'>
                                <div className='input-box'>
                                    <input type='text' placeholder='E-mail id' />
                                    <input type='password' placeholder='Password' />
                                </div>
                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
