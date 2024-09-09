import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidaData } from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/Firebase"

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const togglesignupForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const msg = checkValidaData(email.current.value, password.current.value);
    seterrorMessage(msg);
    if (msg) return;

    if (!isSignInForm) {
      //sign UP Logic
      //create user
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          console.log("signed up")
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode +"-" + errorMessage)
          // ..
        });

    } else {
      //sign IN logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-" + errorMessage)
  });
    }

  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <form
          className=" w-3/12 relative bg-black p-12 rounded-lg bg-opacity-85"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-white py-5 text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-700 text-white  w-full p-4 my-4"
            ></input>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="bg-gray-700 text-white  w-full p-4 my-4"
          />
          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="w-full p-4 my-4 bg-gray-700 text-white"
          />

          <p className="text-red-500 font-semibold text-lg">{errorMessage}</p>

          <button
            className="w-full bg-red-600 p-4 my-4 text-white  rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-white cursor-pointer hover:underline"
            onClick={togglesignupForm}
          >
            {isSignInForm
              ? "New to Netlix? Sign Up now"
              : "Already Registered? Sign In now"}
          </p>
        </form>
      </div>

      {/* {signup && <signUp />} */}
    </div>
  );
};

export default Login;
