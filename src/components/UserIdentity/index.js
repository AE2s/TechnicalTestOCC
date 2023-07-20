import React from "react";
import "./userIdentity.css";

const UserIdentity = ({ user }) => {
  return (
    <div className="userItem">
      <p className="identityLabel">Identity</p>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserIdentity;
