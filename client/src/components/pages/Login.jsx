import React, { useState } from 'react'

import LoginForm from '../login/LoginForm'
import RegisterForm from '../login/RegisterForm'
import ForgotPasswordForm from '../login/ForgotPasswordForm'

import '../../styles/login.scss'

export default function Login() {
    const [showForm, setShowForm] = useState('login')
    
    return (
        <div className='component login-component'>
            <div className='form-container'>
                {
                    showForm === 'login' ?
                        <LoginForm setShowForm={form => setShowForm(form)} />
                    :
                    showForm === 'register' ?
                        <RegisterForm setShowForm={form => setShowForm(form)} />
                    :
                        <ForgotPasswordForm setShowForm={form => setShowForm(form)} />
                }
            </div>
        </div>
    )
}
