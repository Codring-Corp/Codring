import React, { useEffect, useState } from 'react'
import { request } from '../../request'

import AccountCard from './AccountCard'

export default function AccountsList() {
  const [isLoading, setIsLoading] = useState(true)
  const [accounts, setAccounts] = useState()
  
  
  useEffect(() => {
    const getAccounts = async () => {
      // Get all acounts
      const res = await request.get('/accounts')
      setAccounts(res.accounts)
      setIsLoading(false)
    }
    getAccounts()
  }, [])
  
  if (isLoading) return(<div className='loading'>Chargement des utilisateurs...</div>)
  
  return (
    <div className='accounts-list'>
      {  accounts.map((account, index) => {
        return( <AccountCard account={account} key={index} /> )
      })}
    </div>
  )
}