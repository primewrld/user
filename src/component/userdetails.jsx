import React from "react";
import "../index.css";
// UserDetails component
const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Date of Birth: {user.dob}</p>
    </div>
  );
};
export default UserDetails;
