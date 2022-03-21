import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AccountsList from "../admin/AccountsList";
import MessagesList from "../admin/MessagesList";

import '../../styles/admin.scss'

export default function Admin(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
  return (
    <div className='component admin-component'>
      <AccountsList />
      <MessagesList />
    </div>
  );
}
