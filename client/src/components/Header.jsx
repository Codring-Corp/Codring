import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const userId = 261;
  return (
    <div>
      <Link to={`/profil/${userId}`}> Ton profil tu connais</Link>
    </div>
  );
}
