import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import { request } from '../../../request';

import ErrorMsg from '../../forms/ErrorMsg'
import Button from '../../forms/Button'


export default function AdminMsgModif(props) {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [msg, setMsg] = useState(props.msg)
  
  const onSubmit = async data => {
    // Update admin message
    setIsSubmitting(true)
    const res = await request.patch(`/messages/admin/${props.id}`, data)
    setIsSubmitting(false)
    
    if (res.status === 200) {
      // Reload admin messages list after success modification
      props.reloadList()
    } else {
      setError(res.error.input, { type: 'manual', message: res.error.msg })
    }
  }
  
  return (
    <div className='modification-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`input-group ${errors.task ? 'error-input-group' : ''}`}>
          <input {...register(
            "message",
            { required: 'Message obligatoire' }
          )}
          autoFocus
          placeholder="Message administrateur"
          autoComplete='off'
          value={msg}
          onChange={ e => setMsg(e.target.value) }
          />
          { errors.task && <ErrorMsg msg={errors.task.message} /> } 
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