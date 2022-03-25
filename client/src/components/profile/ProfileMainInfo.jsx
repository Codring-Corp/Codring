import React, { useState } from "react";
import Announcement from "../../assets/svg/Announcement";
import Shield from "../../assets/svg/Shield";
import User from "../../assets/svg/User";
import Profil from "../../assets/svg/Profil";
import MessageList from "./MessageList";

export default function ProfileMainInfo(props) {
  const account = props.account;
  const [messageCount, setMessageCount] = useState(0);
  const loadedMessages = (messages) => {
    setMessageCount(messages.length);
  };
  return (
    <div className="header-main-profile">
      <div className="image-container">
        <Profil />
      </div>
      <div className="name-and-role-container">
        <p className="name-title">{account.username}</p>
        {getAccountRole(account.role)}
      </div>
      <p className="email-profile">{account.email}</p>
      <p className="creation-date">
        {" "}
        Compte crée le {getDate(account.createdAt)}
      </p>
      <div className="body-main-profile">
        <div className="messages-list-container">
          <p className="messages-count">{messageCount} Messages</p>
          <MessageList
            username={account.username}
            loadedMessages={loadedMessages}
          />
        </div>

        <p className="point-profile">{account.userPoints} points</p>
      </div>
    </div>
  );
}

function getDate(d) {
  // Return a good formated date
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const date = new Date(d);
  const month = months[date.getMonth()];

  return `${date.getDate()} ${month} ${date.getFullYear()}`;
}

function getAccountRole(role) {
  // Return the icon and the role of the account

  if (role === "admin")
    return (
      <p className="role-title">
        <Shield /> administrateur
      </p>
    );
  else if (role === "moderator")
    return (
      <p className="role-title">
        <Announcement /> modérateur
      </p>
    );
  else
    return (
      <p className="role-title">
        <User /> utilisateur
      </p>
    );
}
