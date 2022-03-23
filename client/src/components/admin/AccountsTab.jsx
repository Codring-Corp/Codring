import React, { useState } from 'react'

import AccountsList from './AccountsList'
import SearchInput from './SearchInput'


export default function AccountsTab() {
  const [searchInput, setSearchInput] = useState('')
  
  return (
    <div className='tab'>
      <SearchInput updateList={value => setSearchInput(value)} placeholder="Rechercher par nom d'utilisateur ou par email" />
      <AccountsList searchInput={searchInput} />
    </div>
  )
}
