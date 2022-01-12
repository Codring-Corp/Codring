import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

import css from '../../styles/login.module.css'

export default function LoginForm() {
    const URL = process.env.REACT_APP_BACKEND_URL
    const navigate = useNavigate()
    
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    
    
    
    const onSubmit = async data => {
        await fetch(`${URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if (res.code === 200) navigate('/')
            else if (res.code === 410) {
                setError("email", {
                    type: "manual",
                    message: res.message,
                })
            } else if (res.code === 411) {
                setError("password", {
                    type: "manual",
                    message: res.message,
                })
            }       
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <h3 className={css.formTitle}>Connexion</h3>
                <div className={`${css.inputGroup} ${errors.email ? css.errorInputGroup : undefined}`}>
                    <label>Email</label>
                    <input {...register(
                        "email",
                        { 
                            required: 'Email obligatoire',
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ,
                                message: 'Email invalide'   
                            }
                        }
                    )}
                    autoFocus
                    />
                    { errors.email &&
                        <div className={css.errorMsg}>
                            <svg viewBox="0 0 256 256"><path d="M128 20a108 108 0 1 0 108 108A108.1 108.1 0 0 0 128 20zm0 192a84 84 0 1 1 84-84a84.1 84.1 0 0 1-84 84zm-12-80V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0zm28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16z" fill="currentColor"></path></svg>
                            <p>{ errors.email.message }</p>
                        </div>
                    }
                </div>
                
                <div className={`${css.inputGroup} ${errors.password ? css.errorInputGroup : undefined}`}>
                    <label>Mot de passe</label>
                    <input
                        {...register(
                            "password",
                            { required: 'Mot de passe obligatoire' }
                        )}
                        type={showPassword ? 'text' : 'password'}
                    />
                    <div className={css.passwordEye} onClick={() => setShowPassword(!showPassword)}>
                        { showPassword ? 
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"></path><circle cx="12" cy="12" r="2.25" stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg>
                            :   
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.6247 10C19.0646 10.8986 19.25 11.6745 19.25 12C19.25 13 17.5 18.25 12 18.25C11.2686 18.25 10.6035 18.1572 10 17.9938M7 16.2686C5.36209 14.6693 4.75 12.5914 4.75 12C4.75 11 6.5 5.75 12 5.75C13.7947 5.75 15.1901 6.30902 16.2558 7.09698"></path><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 4.75L4.75 19.25"></path><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.409 13.591C9.53033 12.7123 9.53033 11.2877 10.409 10.409C11.2877 9.5303 12.7123 9.5303 13.591 10.409"></path></svg>
                        }
                    </div>
                    { errors.password &&
                        <div className={css.errorMsg}>
                            <svg viewBox="0 0 256 256"><path d="M128 20a108 108 0 1 0 108 108A108.1 108.1 0 0 0 128 20zm0 192a84 84 0 1 1 84-84a84.1 84.1 0 0 1-84 84zm-12-80V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0zm28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16z" fill="currentColor"></path></svg>
                            <p>{ errors.password.message }</p>
                        </div>
                    }  
                </div>
                
                <input type="submit" value='Connexion' className={css.submitBtn} />
            </form>
        </div>
    )
}