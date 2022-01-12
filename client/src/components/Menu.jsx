import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link to="/"> Accueil </Link>
      <Link to="/about"> Comment ça marche </Link>
      <Link to="/admin"> Panel administateur </Link>
      <Link to="/historic"> Historique </Link>
      <Link to="/rewards"> Récompenses </Link>
      <Link to="/settings"> Réglages </Link>
      <Link to="/todo"> TodoListe </Link>
    </div>
  );
}
