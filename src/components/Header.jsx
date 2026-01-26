import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constant';

const Header = () => {
    const user = useSelector((store)=>store.user);
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(removeUser())
        localStorage.removeItem("user");
    }
  return (
    <div className="m-4 p-4 flex justify-between bg-gray-200 shadow-2xl">
      <Link to='/'>
        <img
          src={LOGO_URL}
          alt="logo"
          className="w-40"
        />
      </Link>
      <div>
        {user ? (
          <Link to="/">
            <button
              className="font-bold text-lg rounded-lg bg-red-500 px-4 mt-3 py-1"
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
