import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const appEouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  const dispatch = useDispatch();
  useEffect(()=>{
    const storedUser = localStorage.getItem('user');
    if(storedUser){
        dispatch(addUser(JSON.parse(storedUser)))
    }
  },[])
  return (
    <div>
      <RouterProvider router={appEouter} />
    </div>
  );
};

export default Body;
