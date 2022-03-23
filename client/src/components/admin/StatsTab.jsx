import React, { useState, useEffect } from 'react'
import { request } from '../../request'


export default function StatsTab() {
  const [stats, setStats] = useState()
  const [isLoading, setisLoading] = useState(true)
  
  
  useEffect(() => {
    const getAllStats = async() => {
      const res = await request.get('/stats')
      setStats(res)
      setisLoading(false)
    }
    getAllStats()
  }, [])
  
  if (isLoading) return(<div className='loading'>Chargement des statistiques...</div>)
  
  return (
    <div className='tab stats-section'>
      <div className='stat'>
        <span>{ formatNumber(stats.totalAccounts) }</span>
        <p>utilisateurs</p>
      </div>
      <div className='stat'>
        <span>{ formatNumber(stats.totalMessages) }</span>
        <p>messages</p>
      </div>
      <div className='stat'>
        <span>{ formatNumber(stats.totalPoints) }</span>
        <p>points cumulés</p>
      </div>
    </div>
  )
}

function formatNumber(number) {
  // Format number with spaces
  const parts = number.toString().split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  return parts.join(".")
}