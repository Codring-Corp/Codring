import React, { useState, useEffect } from 'react'
import { request } from '../../request'


export default function AdminMsgBanner() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const getAdminMessages = async() => {
      const res = await request.get('/messages/admin')
      setMessages(res.messages)
      setIsLoading(false)
    }
    getAdminMessages()
  }, [])

  if (isLoading) return (<div className='loading'>Chargement...</div>)
  
  
  return (
    <div className='admin-msg-banner'>
      <div>
        { messages.map((message, index) => <p key={index}>{ message.body }</p> )}
      </div>
    </div>
  )
}