import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { redirect } from '../../redirect'


export default function Admin() {
    const navigate = useNavigate()
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        redirect(navigate)
    })
    
  return (
    <div className={`component`}>
      <p>Panel Admin</p>
    </div>
  );
}
