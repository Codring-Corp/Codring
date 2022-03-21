import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import ErrorMsg from '../forms/ErrorMsg'
import Button from '../forms/Button'

import EyeOpen from '../../assets/svg/EyeClose'
import EyeClose from '../../assets/svg/EyeOpen'

import { request } from '../../request'

export default function RegisterForm(props) {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const navigate = useNavigate()
    
    const [showPassword, setShowPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const onSubmit = async data => {
      setIsSubmitting(true)
      const res = await request.post('/auth/register', data)
      setIsSubmitting(false)
      
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
                          validate: {
                            noSpace: value => !/\s/.test(value) || 'Ne peut pas contenir d\'espace',
                            noSpecialChar: value => !/[$&+,:;=?@#|/éçàè'<>.^*()%!]/.test(value) || 'Ne peut pas contenir de caractère spécial'
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
                                required: 'Mot de passe obligatoire' ,
                                validate: {
                                    specialChar: value => /[$&+,:;=?@#|'<>.^*()%!]/.test(value) || 'Doit contenir au moins un caractère spécial',
                                    number: value => /[0-9]/.test(value) || 'Doit contenir au moins un chiffre',
                                    capitalLetter: value => /[A-Z]/.test(value) || 'Doit contenir au moins une lettre majuscule',
                                    lowerCase: value => /[a-z]/.test(value) || 'Doit contenir au moins une lettre miniscule',
                                },
                                minLength: {
                                    value: 8, message: '8 caractères minimum'
                                },
                            }
                        )}
                        type={showPassword ? 'text' : 'password'}
                    />
                    <label>Mot de passe</label>
                    
                    <div className='password-eye' onClick={() => setShowPassword(!showPassword)}>
                        { showPassword ? <EyeClose /> : <EyeOpen />}
                    </div>
                    
                    { errors.password && <ErrorMsg msg={errors.password.message} /> } 
                </div>
                
                <Button
                  type='submit'
                  isSubmitting={isSubmitting}
                  submittingText='Inscription...'
                >
                  Inscription
                </Button>
                
                <p className='bottom-link'>Vous avez déjà un compte ? <span onClick={() => props.setShowForm('login')}>Connexion</span></p>
            </form>
        </div>
    )
}
