import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="m-4 p-4 flex justify-between bg-gray-200 shadow-2xl">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Showtime.svg/1280px-Showtime.svg.png"
        alt="logo"
        className="w-40"
      />
      <div>
        <Link to='/login'>
          <button className="font-bold text-lg rounded-lg bg-red-500 px-4 mt-3 py-1">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header
