import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function About(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
  return (
    <div className='component about-component'>
      <p>
        Envie de montrer au monde entier vos exploits ?<br/>
        Grace à cod'Ring vous pourrez le faire savoir !<br/>
        Ecrivez simplement ce que vous avez à dire, puis d'une simple pression du bouton,<br/>
        l'application enverra votre message à tout les autres utilisateurs !<br/>
      </p>
      <Link to={'/'}>Je me lance !</Link>
    </div>
  );
}