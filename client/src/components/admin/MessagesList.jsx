import React, { useEffect, useState } from 'react'
import { request } from '../../request'

import MessageCard from './MessageCard'


export default function MessagesList(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [messages, setMessages] = useState([])
  const [filteredMessages, setFilteredMessages] = useState([])
  
  const searchInput = props.searchInput
  
  
  useEffect(() => { getMessages() }, [])
  useEffect(() => {
    // Search system
    setFilteredMessages(messages.filter(messages => {
      return (messages.body.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
    }))
  }, [searchInput, messages])
  
  const getMessages = async () => {
    // Get all messages
    setIsLoading(true)
    const res = await request.get('/messages')
    setMessages(res.messages)
    setIsLoading(false)
  }
  
  if (isLoading) return(<div className='loading'>Chargement des messages...</div>)
  
  return (
    <div className='messages-list'>
      {  filteredMessages.map((message, index) => {
        return(
          <MessageCard
            message={message}
            reloadList={() => getMessages()}
            key={index}
          />
        )
      }).reverse()}
    </div>
  )
}