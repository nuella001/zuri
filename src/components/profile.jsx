import React from "react";
import profile from "./assets/images/profile.svg";
import share from './assets/images/share.svg';

const Profile = () => {
  return (
    <div>
      <div className="flex justify-end w-4/6 absolute  ">
        <img src={share} alt="" className="border-dotted border-blue-50  border-2 rounded-full p-4
        cursor-pointer"/>
      </div>
      <div className="relative cursor-pointer w-1/6 mx-auto mt-12 mb-12 ">
        <div className="flex justify-center items-center   ">
          <img className=" block" src={profile} alt="profile_image" />
        </div>
        {/* <div className="bg-black opacity-50  h-full absolute left-0 top-0  z-10
        rounded-full w-24 right-0 bottom-0">
          hello
        </div> */}
      </div>
      <h2 className="flex justify-center items-center mb-8 font-bold text-xl">
        Billionaire Techgirle
      </h2>
    </div>
  );
};

export default Profile;
