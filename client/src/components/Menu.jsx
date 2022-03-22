import React from "react";
import { NavLink as Link, useLocation } from "react-router-dom";

import css from "../styles/menu.module.css";

export default function Menu(props) {
  const path = useLocation().pathname;
  const user = props.user;

  if (!user) return <div></div>;

  return (
    <div className={`menu ${css.menu}`}>
      <div className={css.title}>
        <h2>Cod'Ring</h2>
      </div>

      <div className={css.links}>
        {(user.role === "moderator" || user.role === "admin") && (
          <Link
            to="/admin"
            className={`${path === "/admin" ? css.active : undefined}`}
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12zM4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3z"
                fill="currentColor"
              ></path>
              <circle cx="12" cy="8.5" r="2.5" fill="currentColor"></circle>
              <path
                d="M7 15a5.782 5.782 0 0 0 5 3a5.782 5.782 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3z"
                fill="currentColor"
              ></path>
            </svg>
            {user.role === "moderator" ? "Modération" : "Administration"}
          </Link>
        )}
        <Link to="/" className={`${path === "/" ? css.active : undefined}`}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
            ></path>
          </svg>
          Accueil
        </Link>
        <Link
          to="/todo"
          className={`${path === "/todo" ? css.active : undefined}`}
        >
          <svg viewBox="0 0 32 32">
            <path
              d="M10.28 5.28L7 8.563l-1.28-1.28L4.28 8.72l2 2l.72.686l.72-.687l4-4l-1.44-1.44zM15 7v2h13V7H15zm-4.72 6.28L7 16.564L5.72 15.28l-1.44 1.44l2 2l.72.686l.72-.687l4-4l-1.44-1.44zM15 15v2h13v-2H15zm-4.72 6.28L7 24.563l-1.28-1.28l-1.44 1.437l2 2l.72.686l.72-.687l4-4l-1.44-1.44zM15 23v2h13v-2H15z"
              fill="currentColor"
            ></path>
          </svg>
          Todo list
        </Link>
        <Link
          to="/historic"
          className={`${path === "/historic" ? css.active : undefined}`}
        >
          <svg viewBox="0 0 16 16">
            <g fill="none">
              <path
                d="M3.09 6H5.5a.5.5 0 0 0 0-1H4a5 5 0 1 1-.98 3.455a.5.5 0 1 0-.995.09A6 6 0 1 0 3.5 4.03V3a.5.5 0 0 0-1 0v2.5A.5.5 0 0 0 3 6h.09zM7.5 5a.5.5 0 0 1 .5.5V8h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          Historique
        </Link>
        <Link
          to="/rewards"
          className={`${path === "/rewards" ? css.active : undefined}`}
        >
          <svg viewBox="0 0 16 16">
            <g fill="none">
              <path
                d="M3.5 2A1.5 1.5 0 0 0 2 3.5v1.193c0 .52.27 1.002.711 1.275l3.866 2.39a3 3 0 1 0 2.846 0l3.866-2.39A1.5 1.5 0 0 0 14 4.693V3.5A1.5 1.5 0 0 0 12.5 2h-9zM3 3.5a.5.5 0 0 1 .5-.5H5v3.208l-1.763-1.09A.5.5 0 0 1 3 4.693V3.5zm3 3.326V3h4v3.826L8.263 7.9a.5.5 0 0 1-.526 0L6 6.826zm5-.618V3h1.5a.5.5 0 0 1 .5.5v1.193a.5.5 0 0 1-.237.425L11 6.208zM6 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          Récompenses
        </Link>
      </div>

      <div className={css.bottomLinks}>
        <Link
          to="/settings"
          className={`${path === "/settings" ? css.active : undefined}`}
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12L6 14.485V18h3.515L12 20.485L14.485 18H18v-3.515L20.485 12L18 9.515V6h-3.515L12 3.515L9.515 6H6zm6 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
              fill="currentColor"
            ></path>
          </svg>
          Réglages
        </Link>
        <Link
          to="/about"
          className={`${path === "/about" ? css.active : undefined}`}
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M11.29 15.29a1.58 1.58 0 0 0-.12.15a.76.76 0 0 0-.09.18a.64.64 0 0 0-.06.18a1.36 1.36 0 0 0 0 .2a.84.84 0 0 0 .08.38a.9.9 0 0 0 .54.54a.94.94 0 0 0 .76 0a.9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-.29-.71a1 1 0 0 0-1.42 0zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm0-13a3 3 0 0 0-2.6 1.5a1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 0 1 0 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7z"
              fill="currentColor"
            ></path>
          </svg>
          Comment ça marche
        </Link>

        <Link to="/login" onClick={() => localStorage.clear()}>
          <svg viewBox="0 0 24 24">
            <path
              d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
              fill="currentColor"
            ></path>
          </svg>
          Déconnexion
        </Link>
      </div>
    </div>
  );
}

export function IcBaselineLogout(props) {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
