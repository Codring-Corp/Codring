import React, { useEffect, useState } from 'react'
import { request } from '../../request'

import MessageCard from './MessageCard'


export default function MessagesList() {
  const [isLoading, setIsLoading] = useState(true)
  const [accounts, setAccounts] = useState()
  
  
  useEffect(() => {
    const getMessages = async () => {
      // Get all messages
      const res = await request.get('/messages')
      setAccounts(res.messages)
      setIsLoading(false)
    }
    getMessages()
  }, [])
  
  if (isLoading) return(<div className='loading'>Chargement des messages</div>)
  
  return (
    <div className='messages-list'>
      {  accounts.map((message, index) => {
        return( <MessageCard message={message} key={index} /> )
      })}
    </div>
  )
}