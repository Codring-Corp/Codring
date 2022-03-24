import React, { useState, useEffect } from 'react'

import MessageCard from './MessageCard'
import { request } from '../../request'


export default function MessagesList() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  
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
  
  useEffect(() => {
    // Set a server sent events to auto refresh messages list when a new message is created in DB
    const sse = new EventSource(`${backendUrl}/messages/sse`)

    sse.addEventListener('message', (e) => {
      // Update the messages list with the new messages to display them
      const newMessages = JSON.parse(e.data);
      newMessages.map(msg => setMessages(prevData => [...prevData, msg]))
    })

    return () => sse.close()
  }, []);
  
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