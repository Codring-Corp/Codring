import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import { request } from '../../../request';


export default function AdminMsgCreate(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isAddingMsg, setIsAddingMsg] = useState(false)
  
  const onSubmit = async data => {
    // Check if msg isn't empty
    const newMessage = data.message
    
    if (newMessage.replace(/\s/g, '').length) {
      // Save the new message in DB
      setIsAddingMsg(true)
      await request.post('/messages/admin', data)
      setIsAddingMsg(false)
      // Clear input and reload msg list
      props.reloadList()
      reset({ message: '' })
    }
  }
  
  return (
    <div className='create-admin-msg'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('message')}
          type='text'
          placeholder="Ajouter un nouveau message d'administrateur"
          autoComplete='off'
        />
      </form>
      { isAddingMsg && <p className='loading'>Ajout du message...</p> }
    </div>
  )
}