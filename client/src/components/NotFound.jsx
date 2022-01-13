import React from "react";
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className={`component`}>
      <p>Cette page n'existe pas...</p>
      <Link to='/'>Retour au site</Link>
    </div>
  );
}
