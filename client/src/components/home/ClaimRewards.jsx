import React from 'react'

import css from '../../styles/home.module.css'
import trophy from '../../assets/images/trophy.png'

export default function ClaimRewards() {
    return (
        <div className={css.claimRewards}>
            <div className={css.text}>
                <p>Dernière connexion il y a 2 jours</p>
                <p>Réclame tes récompoenses</p>
            </div>
            <img src={trophy} alt="trophy" />
        </div>
    )
}
