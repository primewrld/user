import React from "react";

import Profile from "./component/profile";

  const usersData = [
    {
      name: "Ozoani Collins",
      bio: "A software engineer with a passion for coding.",
      dob: "18th february 2003",
    },
    {
      name: "Ozoani Olivia",
      bio: "An artist exploring the beauty of nature through paintings.",
      dob: "18th May 2001",
    },
    {
      name: "Edeh Ifeanyi",
      bio: "A traveler discovering new cultures and business man with an overwhelming positive endeaveour.",
      dob: "12th july 1999",
    },
  ];
function App() {


  return <Profile users={usersData} />;
}

export default App;
