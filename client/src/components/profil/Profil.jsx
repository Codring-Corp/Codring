import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { redirect } from '../../redirect'


export default function Profil() {
    const navigate = useNavigate()
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        redirect(navigate)
    })
    
    // Get the id of the user to display
    const { userId } = useParams()
    
    return (
        <div className={`component`}>
            <p> Profil {userId} </p>
        </div>
    );
}
