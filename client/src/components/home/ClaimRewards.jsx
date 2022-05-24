import React from 'react'

import css from '../../styles/home.module.css'
import trophy from '../../assets/images/trophy.png'

export default function ClaimRewards() {
    return (
        <div className={css.claimRewards}>
            <div className={css.text}>
                {/* <p>Dernière connexion il y a</p> */}
                <p></p>
                <p>Réclame tes récompenses</p>
            </div>
            <img src={trophy} alt="trophy" />
        </div>
    )
}
