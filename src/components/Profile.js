import React from "react";

function Profile({ user, children }) {
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      {user && <h2>{user.name}'s Profile</h2>}
      {children}
    </div>
  );
}

export default Profile;
