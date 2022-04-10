import React, { useEffect, useState } from 'react'

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.activeTab)
  
  useEffect(() => {
    setActiveTab(props.activeTab)
  }, [props.activeTab])
  
  return (
    <div className="tabs">
      <p
        className={activeTab === 'accounts' ? 'active' : ''}
        onClick={() => props.setActiveTab('accounts')}
      >
        Utilisateurs
      </p>
      
      <p
        className={activeTab === 'messages' ? 'active' : ''}
        onClick={() => props.setActiveTab('messages')}
      >
        Messages
      </p>
      
      <p
        className={activeTab === 'todo' ? 'active' : ''}
        onClick={() => props.setActiveTab('todo')}
      >
        Todo list
      </p>
      
      <p
        className={activeTab === 'adminMsg' ? 'active' : ''}
        onClick={() => props.setActiveTab('adminMsg')}
      >
        Messages admin
      </p>
      
      <p
        className={activeTab === 'stats' ? 'active' : ''}
        onClick={() => props.setActiveTab('stats')}
      >
        Statistiques
      </p>
      
    </div>
  )
}