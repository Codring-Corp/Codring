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

  const setCssAnimation = () => {
    // Adapt the CSS animation duration in relation to messages length
    const messagesLength = messages.map(msg => msg.body.length).reduce((a, b) => a + b, 0)
    const animationDuration = messagesLength > 100 ? messagesLength / 10 : 10
    
    return { animation: `anim ${animationDuration}s infinite linear` }
  }
  

  if (isLoading) return (<div className='loading'>Chargement...</div>)
  
  return (
    <div className='admin-msg-banner'>
      <div className='wrapper' style={ setCssAnimation() }>
        { messages.map((message, index) => <p key={index}>{ message.body }</p> )}
      </div>
    </div>
  )
}