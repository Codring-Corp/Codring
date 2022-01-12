import React from "react";
import { useParams } from "react-router-dom";

export default function Profil() {
  let { userId } = useParams();
  return (
    <div>
      <p>Ton profil est là espèce de sombre {userId} de pute </p>
    </div>
  );
}
