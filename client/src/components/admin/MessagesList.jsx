import React, { useEffect, useState } from 'react'
import { request } from '../../request'

import MessageCard from './MessageCard'


export default function MessagesList() {
  const [isLoading, setIsLoading] = useState(true)
  const [accounts, setAccounts] = useState()
  
  
  useEffect(() => { getMessages() }, [])
  
  const getMessages = async () => {
    // Get all messages
    setIsLoading(true)
    const res = await request.get('/messages')
    setAccounts(res.messages)
    setIsLoading(false)
  }
  
  if (isLoading) return(<div className='loading'>Chargement des messages...</div>)
  
  return (
    <div className='messages-list'>
      {  accounts.map((message, index) => {
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