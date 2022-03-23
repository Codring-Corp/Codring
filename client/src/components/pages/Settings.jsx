import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'


export default function Settings(props) {
    const navigate = useNavigate()
    
    const token = localStorage.getItem('accessToken')
    const isAuth = props.isAuth
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
  return (
    <div className='component settings-component'>
      <div className="reset-password-container">
        <button className="primary-btn reset-btn">
          <Link to={`/reset/password/${token}`}>
            Réinitialiser mon mot de passe
          </Link>
        </button>
      </div>
    </div>
  );
}
