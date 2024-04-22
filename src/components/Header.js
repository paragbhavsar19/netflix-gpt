import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is SignIn
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //User is Signed Out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="Header-part absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between z-20">
      <img src={LOGO} alt="Netflix" className="w-44" />
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
