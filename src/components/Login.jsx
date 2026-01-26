import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = async (event) => {
    event.preventDefault();
    const msg = validateData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if (msg) return;
    if (!isSignInForm) {
      // sign up logic
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5xO0ofV9TiG9j9z18LJPkq-QC2TXOy0o",
          {
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          },
        );
        console.log(res);
      } catch (error) {
        const firebaseError =
          error?.response?.data?.error?.message || "Something went wrong";
        setErrorMessage(firebaseError);
      }
    } else {
      // sign in logic
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB5xO0ofV9TiG9j9z18LJPkq-QC2TXOy0o",
          {
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          },
        );
        navigate('/')
        console.log(res);
      } catch (error) {
        const firebaseError =
          error?.response?.data?.error?.message || "Something went wrong";
        setErrorMessage(firebaseError);
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3d31dac6-aaf0-4e6e-8bd7-e16c5d9cd9a3/web/IN-en-20260119-TRIFECTA-perspective_cce70d60-69c5-428f-99cf-44c212fcec3f_large.jpg"
          alt="banner"
        />
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
        />
        <p className="font-bold text-red-700 text-xl">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 px-24 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
