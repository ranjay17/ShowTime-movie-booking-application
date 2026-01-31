import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";
import { setShowGeminiSearch } from "../utils/geminiSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gemini = useSelector((store) => store.gemini.showGeminiSearch);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    alert("Logout successfull")
    localStorage.removeItem("user");
  };

  return (
    <div className="m-4 p-4 flex justify-between bg-gray-200 shadow-2xl">
      <Link to="/">
        <img
          src={LOGO_URL}
          alt="logo"
          className="w-40"
          onClick={() => dispatch(setShowGeminiSearch(true))}
        />
      </Link>
      <div className="flex items-center gap-4">
        <div>
          {gemini ? (
            <Link to="/gemini-search">
              <button
                className="mx-6 bg-purple-700 text-white p-2 rounded-lg"
                onClick={() => dispatch(setShowGeminiSearch(false))}
              >
                AI Suggestion
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button
                className="mx-6 bg-purple-700 text-white p-2 rounded-lg"
                onClick={() => dispatch(setShowGeminiSearch(true))}
              >
                Home
              </button>
            </Link>
          )}
        </div>
        <div>
          {user ? (
            <Link to="/">
              <button
                className="font-bold text-lg rounded-lg bg-red-500 px-4 py-1 text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="font-bold text-lg rounded-lg bg-red-500 px-4 py-1 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
