import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { redirect } from '../../redirect'

import css from '../../styles/home.module.css'

import ClaimRewards from "./ClaimRewards";

export default function Home() {
    const navigate = useNavigate()
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        redirect(navigate)
    })
    
  return (
    <div className={`component ${css.component}`}>
      
      <Link to='rewards'>
          <ClaimRewards />
      </Link>
    </div>
  );
}