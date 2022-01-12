import React from "react";
import { Link } from "react-router-dom";

import css from '../styles/header.module.css'


export default function Header() {
  const userId = 261;
  
  return (
    <div className={`header ${css.header}`}>
        
      <Link to={`/profil/${userId}`}>
        <svg viewBox="0 0 256 256"><path d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128z" fill="currentColor"></path></svg>
      </Link>
    </div>
  );
}