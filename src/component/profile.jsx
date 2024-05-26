import React, {useState, useEffect} from "react";
import UserDetails from "./userdetails";
import '../index.css';
// Profile component
const Profile = ({ users }) => {
    // State to hold users
    const [userList, setUserList] = useState([]);
  
    // Set users to state on first page load
    useEffect(() => {
      setUserList(users);
    }, [users]);
   
    return (
      <div className="profile">
        <h1>User Profiles</h1>
        {/* Map over users and render UserDetails for each user */}
        {userList.map(user => (
          <UserDetails key={user.id} user={user} />
        ))}
      </div>
    );
  };
  export default Profile