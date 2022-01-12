import React from "react";
import { Link } from "react-router-dom";

import css from '../styles/menu.module.css'

export default function Menu() {
  return (
    <div className={`menu ${css.menu}`}>
        
      <div className={css.title}>
          <h2>Cod'Ring</h2>
      </div>
        
      <div className={css.links}>
        <Link to="/admin"> Panel administateur </Link>
        <Link to="/"> Accueil </Link>
        <Link to="/todo"> Todo list </Link>
        <Link to="/historic"> Historique </Link>
        <Link to="/rewards"> Récompenses </Link>
        <Link to="/settings"> Réglages </Link>
        <Link to="/about"> Comment ça marche </Link>
      </div>
      
      <div className={css.bottomLinks}>
        <Link to="/login" className={css.deconectionBtn}>Déconnexion</Link>
      </div>
    </div>
  );
}
