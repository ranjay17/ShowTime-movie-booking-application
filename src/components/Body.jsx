import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import MovieDetails from "./MovieDetails";
import BookingPage from "./BookingPage";
import ProtectedRoute from "./ProtectedRoute";
import GeminiPage from "./GeminiPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetails />,
    },
    {
      path: "/booking/:id",
      element: (
        <ProtectedRoute>
          <BookingPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/gemini-search',
      element: <GeminiPage />
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
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
