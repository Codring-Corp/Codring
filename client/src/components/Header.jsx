import React from "react";
import { Link } from "react-router-dom";

import Profil from "../assets/svg/Profil";

import '../styles/header.scss'


export default function Header(props) {
  const user = props.user
  
  if (!user) return(<div></div>)
  
  return (
    <div className='header'>
        
      <Link to={`/profile/${user.username}`}>
        <Profil />
      </Link>
    </div>
  );
}