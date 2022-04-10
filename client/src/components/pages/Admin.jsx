import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountsTab from '../admin/accountsTab/AccountsTab'
import MessagesTab from '../admin/messagesTab/MessagesTab'
import TodoTab from '../admin/todoTab/TodoTab'
import AdminMsgTab from '../admin/adminMsgTab/AdminMsgTab'
import StatsTab from '../admin/statsTab/StatsTab'
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
        activeTab === 'adminMsg' ? <AdminMsgTab /> :
        activeTab === 'todo' ? <TodoTab /> :
        <StatsTab />
      }
    </div>
  );
}
