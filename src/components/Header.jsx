import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constant';
import { setShowGptPage } from '../utils/gptSlice';

const Header = () => {
    const user = useSelector((store)=>store.user);
    const gpt = useSelector((store) => store.gpt.showGptPage);
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(removeUser())
        localStorage.removeItem("user");
    }
  return (
    <div className="m-4 p-4 flex justify-between bg-gray-200 shadow-2xl">
      <Link to="/">
        <img src={LOGO_URL} alt="logo" className="w-40" onClick={()=>dispatch(setShowGptPage(true))}/>
      </Link>
      <div>
        {gpt && (
          <Link to="/gemini-search">
            <button
              className="mx-6 bg-purple-700 text-white p-2 rounded-lg"
              onClick={()=>dispatch(setShowGptPage(false))}
            >
              AI Suggestion
            </button>
          </Link>
        )}

        {user ? (
          <Link to="/">
            <button
              className="font-bold text-lg rounded-lg bg-red-500 px-4 mt-3 py-1 text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="font-bold text-lg rounded-lg bg-red-500 px-4 mt-3 py-1">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header
