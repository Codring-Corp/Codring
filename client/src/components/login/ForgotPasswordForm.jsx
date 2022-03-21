import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '../forms/Button';
import ErrorMsg from '../forms/ErrorMsg';

export default function ForgotPasswordForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    const onSubmit = data => {
        console.log(data);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='form-title'>Mot de passe oublié</h3>
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
                
                <Button
                  type='submit'
                  isSubmitting={false}
                  submittingText='Envoi...'
                >
                  Réinitialiser
                </Button>
                
                <p className='bottom-link'>Vous avez déjà un compte ? <span onClick={() => props.setShowForm('login')}>Connexion</span></p>
            </form>
        </div>
    )
}
