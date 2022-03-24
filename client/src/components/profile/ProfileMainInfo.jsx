import React from "react";

export default function ProfileMainInfo(props) {
  const account = props.account;
  console.log(account);
  return (
    <div className="header-main-profile">
      <p className="name-title">{account.username}</p>
    </div>
  );
}
