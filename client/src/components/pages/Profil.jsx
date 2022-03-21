import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Profil(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
    // Get the id of the user to display
    const { userId } = useParams()
    
    return (
        <div className={`component`}>
            <p> Profil {userId} </p>
        </div>
    );
}
