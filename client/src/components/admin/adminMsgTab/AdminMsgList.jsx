import React, { useState, useEffect } from 'react'

import AdminMsgCard from './AdminMsgCard'
import { request } from '../../../request'


export default function AdminMsgList(props) {
  const [messages, setMessages] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => getAdminMsg(), [])
  
  const getAdminMsg = async() => {
    // Get all messages sent by admins
    setIsLoading(true)
    const res = await request.get('/messages/admin')
    setMessages(res.messages)
    setIsLoading(false)
  }
  
  // Reload messages list when a message is created or deleted
  // Function triggered by parent component
  props.reloadList.current = () => getAdminMsg()
  
  if (isLoading) return(<div className='loading'>Chargement des messages...</div>)
  
  return (
    <div className='admin-msg-list'>
      { messages.map((msg, index) => {
        return(
          <AdminMsgCard
            msg={msg}
            reloadList={() => getAdminMsg()}
            key={index}
          />
        )
      }) }
    </div>
  )
}