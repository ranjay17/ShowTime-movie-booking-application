import React, { useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const BookingPage = () => {
  const movieDetail = useSelector((store) => store.movie.movieDetails);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [price, setPrice] = useState(0);

  if (!movieDetail) return null;

  const seats = Array.from({ length: 32 });

  const toggleSeat = (index) => {
    setPrice(price + 50)
    setSelectedSeats((prev) =>
      prev.includes(index) ? prev.filter((s) => s !== index) : [...prev, index],
    );
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen p-6">
        <h1 className="font-bold text-2xl text-center mb-6">Booking Page</h1>
        <div className="bg-white p-4 rounded mb-6 max-w-md mx-auto">
          <h2 className="font-bold text-lg text-center">{movieDetail.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt="poster"
          />
        </div>

        <div className="max-w-md mx-auto">
          <h3 className="font-semibold mb-3">Select Seats</h3>

          <div className="grid grid-cols-8 gap-3 justify-center">
            {seats.map((_, index) => (
              <div
                key={index}
                onClick={() => toggleSeat(index)}
                className={` w-10 h-10 border border-black bg-gray-200 cursor-pointer ${
                  selectedSeats.includes(index)
                    ? "bg-green-500 border-green-600"
                    : "hover:bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between m-3 p-2">
            <h1 className="text-lg font-semibold">Total Price: ₹ {price} </h1>
            <button className=" bg-red-500 text-white font-semibold  border border-black rounded-sm">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
