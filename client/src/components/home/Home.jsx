import React from "react";
import { Link } from 'react-router-dom'

import css from '../../styles/home.module.css'

import ClaimRewards from "./ClaimRewards";

export default function Home() {
  return (
    <div className={`component ${css.component}`}>
      
      <Link to='rewards'>
          <ClaimRewards />
      </Link>
    </div>
  );
}
