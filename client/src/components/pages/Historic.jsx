import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MessagesList from "../historic/MessagesList";


export default function Historic(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
  return (
    <div className='component historic-component'>
      <MessagesList />
    </div>
  );
}