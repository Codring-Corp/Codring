import React, { useEffect, useState } from 'react'
import { request } from '../../request'

import AccountCard from './AccountCard'

export default function AccountsList() {
  const [isLoading, setIsLoading] = useState(true)
  const [accounts, setAccounts] = useState()
  
  
  useEffect(() => { getAccounts() }, [])
  
  const getAccounts = async () => {
    // Get all accounts
    setIsLoading(true)
    const res = await request.get('/accounts')
    setAccounts(res.accounts)
    setIsLoading(false)
  }
  
  if (isLoading) return(<div className='loading'>Chargement des utilisateurs...</div>)
  
  return (
    <div className='accounts-list'>
      {  accounts.map((account, index) => {
        return(
          <AccountCard
            account={account}
            reloadList={() => getAccounts()}
            key={index}
          />
        )
      })}
    </div>
  )
}