import React, { useState } from 'react'

import css from '../../styles/login.module.css'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPasswordForm from './ForgotPasswordForm'

export default function Login() {
    const [showForm, setShowForm] = useState('login')
    
    return (
        <div className={`component ${css.component}`}>
            {
                showForm === 'login' ? <LoginForm /> :
                showForm === 'register' ? <RegisterForm /> :
                <ForgotPasswordForm />
            }
            
            { showForm === 'login' && 
                <div>
                    <p className={css.redirect} onClick={() => setShowForm('forgotPassword')}><span>Mot de passe oublié</span></p> 
                    <p className={css.redirect}>Vous n'avez pas de compte ? <span onClick={() => setShowForm('register')}>Inscription</span></p>
                </div>
            }
            { showForm === 'register' && <p className={css.redirect}>Vous avez déjà un compte ? <span onClick={() => setShowForm('login')}>Connexion</span></p> }
            { showForm === 'forgotPassword' && <p className={css.redirect}>Vous avez déjà un compte ? <span onClick={() => setShowForm('login')}>Connexion</span></p> }
        </div>
    )
}
