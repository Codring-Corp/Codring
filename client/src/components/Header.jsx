import React from "react";
import { Link } from "react-router-dom";

import css from '../styles/header.module.css'

import userPicture from '../assets/images/user.png'

export default function Header() {
  const userId = 261;
  
  return (
    <div className={`header ${css.header}`}>
        
      <Link to={`/profil/${userId}`}>
          <img src={userPicture} alt="Accéder au profil" />
      </Link>
    </div>
  );
}
