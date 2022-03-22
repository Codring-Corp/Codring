import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountsTab from '../admin/AccountsTab'
import MessagesTab from '../admin/MessagesTab'
import TodoTab from '../admin/TodoTab'
import StatsTab from '../admin/StatsTab'
import Tabs from "../admin/Tabs";

import '../../styles/admin.scss'


export default function Admin(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth
    const user = props.user
    
    const [activeTab, setActiveTab] = useState('accounts')
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
        else if (user.role === 'user') navigate('/')
    })
    
  return (
    <div className='component admin-component'>
      
      <Tabs activeTab={activeTab} setActiveTab={tab => setActiveTab(tab)} />
      
      { 
        activeTab === 'accounts' ? <AccountsTab /> :
        activeTab === 'messages' ? <MessagesTab /> :
        activeTab === 'todo' ? <TodoTab /> :
        <StatsTab />
      }
    </div>
  );
}
