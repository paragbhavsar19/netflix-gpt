import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative Login-part h-screen">
      <Header />

      <div className="absolute w-1/4 mx-auto top-44 right-0 left-0 ">
        <form className="p-10 mx-10 bg-black bg-opacity-80 rounded-xl">
          <h1 className="text-3xl font-bold text-white p-2 mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-6 mx-2 block w-full bg-transparent border rounded text-white"
            />
          )}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="p-4 my-6 mx-2 block w-full bg-transparent border rounded text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-4 my-6 mx-2 block w-full bg-transparent border rounded text-white"
          />
          <button className="text-lg font-semibold text-white p-2 my-3 mx-2 block bg-red-700 w-full rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 mx-2 text-base text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registred? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
