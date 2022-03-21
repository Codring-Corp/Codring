import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

import css from '../../styles/home.module.css'

import ClaimRewards from "../home/ClaimRewards";

export default function Home(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth
    const user = props.user
    
    console.log(user);
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
  return (
    <div className={`component ${css.component}`}>
      <p>Accueil</p>
      <Link to='rewards'>
          <ClaimRewards />
      </Link>
      
    </div>
  )
}