import React from "react";
import profile from './assets/images/profile.svg'

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <img src={profile} alt="profile_image" />
      </div>
      <h2  className="flex justify-center items-center"  >Billionaire Techgirle</h2>
    </div>
  );
};

export default Profile;
