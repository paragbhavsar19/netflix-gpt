import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="Header-part absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
        className="w-44"
      />
      {user && (
        <div className="flex items-center space-x-3">
          <img src={user?.photoURL} alt="User" className="w-10 h-10" />
          <button
            className="text-sm font-semibold px-5 py-2.5 bg-black text-white"
            onClick={handleSignOut}
          >
            Sign Out {user?.dispayName}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
