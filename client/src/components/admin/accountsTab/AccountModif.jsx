import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ErrorMsg from '../../forms/ErrorMsg'
import Button from '../../forms/Button'

import { request } from '../../../request'


export default function AccountModif(props) {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const account = props.account
  const email = account.email
  const [username, setUsername] = useState(account.username)
  const [points, setPoints] = useState(account.userPoints)
  const [role, setRole] = useState(account.role)
  
  const onSubmit = async data => {
    // Update user's profile
    data.role = role
    data.userPoints = parseInt(data.userPoints)
    
    setIsSubmitting(true)
    const res = await request.patch('/accounts', data)
    setIsSubmitting(false)
    
    if (res.status === 200) {
      // Reload account list after success modification
      props.reloadList()
    } else {
      setError(res.error.input, { type: 'manual', message: res.error.msg })
    }
  }
  
  
  return (
    <div className='modification-container'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='left-part'>
          <div className={`input-group ${errors.username ? 'error-input-group' : ''}`}>
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
            autoFocus
            placeholder="Nom d'utilisateur"
            autoComplete='off'
            value={username}
            onChange={ e => setUsername(e.target.value) }
            />
            { errors.username && <ErrorMsg msg={errors.username.message} /> } 
          </div>
        
          <div className={`input-group ${errors.email ? 'error-input-group' : ''}`}>
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
            autoComplete='off'
            value={email}
            readOnly='readonly'
            className='readonly-input'
            />
            { errors.email && <ErrorMsg msg={errors.email.message} /> } 
          </div>

          <div className={`input-group ${errors.userPoints ? 'error-input-group' : ''}`}>
            <input {...register(
              "userPoints",
              {
                required: 'Points obligatoire',
              }
            )}
            type='number'
            placeholder="Points"
            autoComplete='off'
            value={points}
            onChange={ e => setPoints(e.target.value) }
            />
            { errors.userPoints && <ErrorMsg msg={errors.userPoints.message} /> } 
          </div>
        </div>
        
        <div className='right-part'>
          <div className='radio-input'>
            <input
              type='radio'
              name='role'
              id='user'
              value='user'
              checked={role === 'user'}
              onChange={() => setRole('user')}
            />
            <label htmlFor='user'>Utilisateur</label>
          </div>
          <div className='radio-input'>
            <input
              type='radio'
              name='role'
              id='moderator'
              value='moderator'
              checked={role === 'moderator'}
              onChange={() => setRole('moderator')}
            />
            <label htmlFor='moderator'>Modérateur</label>
          </div>
          <div className='radio-input'>
            <input
              type='radio'
              name='role'
              id='admin'
              value='admin'
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            <label htmlFor='admin'>Administrateur</label>
          </div>
        </div>
        
        <div className='btns'>
          <Button
            type='submit'
            isSubmitting={isSubmitting}
            submittingText='Modification...'
          >
            Modifier
          </Button>
          
          <p onClick={() => props.hideModifForm()}>Annuler</p>
        </div>
        
      </form>
    </div>
  )
}