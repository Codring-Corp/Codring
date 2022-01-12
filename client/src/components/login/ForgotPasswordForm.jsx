import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import css from '../../styles/login.module.css'

export default function ForgotPasswordForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    const onSubmit = data => {
        console.log(data);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                <h3 className={css.formTitle}>Mot de passe oublié</h3>
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
                
                <input type="submit" value='Envoyer un mail' className={css.submitBtn} />
            </form>
        </div>
    )
}
