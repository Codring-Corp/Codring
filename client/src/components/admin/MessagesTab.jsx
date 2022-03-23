import React, { useState } from 'react'

import MessagesList from './MessagesList'
import SearchInput from './SearchInput'


export default function MessagesTab() {
  const [searchInput, setSearchInput] = useState('')
  
  return (
    <div className='tab'>
      <SearchInput updateList={value => setSearchInput(value)} placeholder="Rechercher un message" />
      <MessagesList searchInput={searchInput} />
    </div>
  )
}