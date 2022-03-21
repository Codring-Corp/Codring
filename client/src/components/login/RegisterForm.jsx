import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import ErrorMsg from '../forms/ErrorMsg'
import Button from '../forms/Button'
import { request } from '../../request'

export default function RegisterForm(props) {
    const navigate = useNavigate()
    
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    
    const onSubmit = async data => {
      const res = await request.post('/auth/register', data)
      
      if (res.status === 200) {
          // Set access token in localStorage and redirect user
          localStorage.setItem('accessToken', res.accessToken)
          navigate('/')
          // Refresh the page to apply localstorage changes
          window.location.reload(false)
      }
      else {
          setError(res.error.input, {
              type: "manual",
              message: res.error.msg,
          })
      }
    }
    
    return (
        <div className='register-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='form-title'>Inscription</h3>
                <div className={`input-group ${errors.email ? 'error-input-group' : undefined}`}>
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
                    <label>Email</label>
                    { errors.email && <ErrorMsg msg={errors.email.message} /> } 
                </div>
                
                <div className={`input-group ${errors.username ? 'error-input-group' : undefined}`}>
                    <input {...register(
                        "username",
                        { 
                            required: 'Nom d\'utilisateur obligatoire',
                            minLength: {
                                value: 3,
                                message: 'Minimum 3 caractères'
                            }
                        }
                    )}
                    />
                    <label>Nom d'utilisateur</label>
                    { errors.username && <ErrorMsg msg={errors.username.message} /> } 
                </div>
                
                <div className={`input-group ${errors.password ? 'error-input-group' : undefined}`}>
                    <input
                        {...register(
                            "password",
                            {
                                required: 'Mot de passe obligatoire',
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ,
                                    message: 'Au moins 8 caractères, une majuscule, une miniscule, un chiffre et un caractère spécial' 
                                }
                            }
                        )}
                        type={showPassword ? 'text' : 'password'}
                    />
                    <label>Mot de passe</label>
                    
                    <div className='password-eye' onClick={() => setShowPassword(!showPassword)}>
                        { showPassword ? 
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"></path><circle cx="12" cy="12" r="2.25" stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg>
                            :   
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.6247 10C19.0646 10.8986 19.25 11.6745 19.25 12C19.25 13 17.5 18.25 12 18.25C11.2686 18.25 10.6035 18.1572 10 17.9938M7 16.2686C5.36209 14.6693 4.75 12.5914 4.75 12C4.75 11 6.5 5.75 12 5.75C13.7947 5.75 15.1901 6.30902 16.2558 7.09698"></path><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 4.75L4.75 19.25"></path><path stroke="#6600CC40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.409 13.591C9.53033 12.7123 9.53033 11.2877 10.409 10.409C11.2877 9.5303 12.7123 9.5303 13.591 10.409"></path></svg>
                        }
                    </div>
                    
                    { errors.password && <ErrorMsg msg={errors.password.message} /> } 
                </div>
                
                <Button
                  type='submit'
                  isSubmitting={false}
                  submittingText='Inscription...'
                >
                  Inscription
                </Button>
                
                <p className='bottom-link'>Vous avez déjà un compte ? <span onClick={() => props.setShowForm('login')}>Connexion</span></p>
            </form>
        </div>
    )
}
