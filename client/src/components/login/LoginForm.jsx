import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import ErrorMsg from '../forms/ErrorMsg'
import Button from '../forms/Button'

import EyeOpen from '../../assets/svg/EyeClose'
import EyeClose from '../../assets/svg/EyeOpen'

import { request } from '../../request'


export default function LoginForm(props) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    
    
    const onSubmit = async data => {
        setIsSubmitting(true)
        const res = await request.post('/auth/login', data)
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className='form-title'>Connexion</h3>
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
                
                <div className={`input-group ${errors.password ? 'error-input-group' : undefined}`}>
                    <label>Mot de passe</label>
                    <input
                        {...register(
                            "password",
                            { required: 'Mot de passe obligatoire' }
                        )}
                        type={showPassword ? 'text' : 'password'}
                    />
                    <div className='password-eye' onClick={() => setShowPassword(!showPassword)}>
                        { showPassword ? <EyeClose /> : <EyeOpen />}
                    </div>
                    { errors.password && <ErrorMsg msg={errors.password.message} /> } 
 
                </div>
                
                <Button
                  type='submit'
                  isSubmitting={isSubmitting}
                  submittingText='Connexion...'
                >
                  Connexion
                </Button>
                
                <div>
                    <p className='bottom-link' onClick={() => props.setShowForm('forgotPassword')}><span>Mot de passe oublié</span></p> 
                    <p className='bottom-link'>Vous n'avez pas de compte ? <span onClick={() => props.setShowForm('register')}>Inscription</span></p>
                </div>
            </form>
        </div>
    )
}