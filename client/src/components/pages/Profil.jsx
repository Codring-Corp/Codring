import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { request } from "../../request";
import ProfileMainInfo from "../profile/ProfileMainInfo";
import "../../styles/profile.scss";

export default function Profil(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = props.isAuth;
  const [account, setAccount] = useState(null);
  useEffect(() => {
    // If user isn't auth, redirect him to the login page
    if (!isAuth) navigate("/login");
  });
  // Get the name of the user to display
  const { userId } = useParams();
  useEffect(() => getAccount(), []);

  const getAccount = async () => {
    const res = await request.get(`/accounts/${userId}`);
    setAccount(res.account[0]);
    setIsLoading(false);
  };
  if (isLoading)
    return <div className="loading">Chargement des utilisateurs...</div>;

  return (
    <div className={`component profile-component`}>
      <ProfileMainInfo account={account} />
    </div>
  );
}
