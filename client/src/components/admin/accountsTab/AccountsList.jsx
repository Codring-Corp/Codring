import React, { useEffect, useState } from 'react'
import { request } from '../../../request'

import AccountCard from './AccountCard'


export default function AccountsList(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [accounts, setAccounts] = useState([])
  const [filteredAccounts, setFilteredAccounts] = useState([])
  
  const searchInput = props.searchInput
  
  useEffect(() => getAccounts(), [])
  useEffect(() => {
    // Search system
    setFilteredAccounts(accounts.filter(account => {
      return (
        account.username.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
        account.email.toLowerCase().includes(searchInput.toLowerCase())
      )
    }))
  }, [searchInput, accounts])
  
  const getAccounts = async() => {
    // Get all accounts
    setIsLoading(true)
    const res = await request.get('/accounts')
    setAccounts(res.accounts)
    setIsLoading(false)
  }
  
  if (isLoading) return(<div className='loading'>Chargement des utilisateurs...</div>)
  
  return (
    <div className='accounts-list'>
      {  filteredAccounts.map((account, index) => {
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