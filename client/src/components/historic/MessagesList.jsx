import React, { useState, useEffect } from 'react'

import MessageCard from './MessageCard'
import { request } from '../../request'


export default function MessagesList() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const getMessages = async () => {
      // Get all messages
      setIsLoading(true)
      const res = await request.get('/messages')
      setMessages(res.messages)
      setIsLoading(false)
    }
    getMessages()
  }, [])
  
  if (isLoading) return(<div className='loading'>Chargement de l'historique messages...</div>)
  
  return (
    <div className='messages-list'>
      {  messages.map((message, index) => {
        return(
          <MessageCard
            msg={message}
            key={index}
          />
        )
      }).reverse()}
    </div>
  )
}