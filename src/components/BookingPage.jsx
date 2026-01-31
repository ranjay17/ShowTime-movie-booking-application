import React, { useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { MOVIE_IMAGE_URL } from "../utils/constant";

const BookingPage = () => {
  const movieDetail = useSelector((store) => store.movie.movieDetails);
  const user = useSelector((store) => store.user);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [price, setPrice] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  if (!movieDetail) return null;

  const seats = Array.from({ length: 32 });

  const toggleSeat = (index) => {
    if (selectedSeats.includes(index)) {
      // deselect
      setSelectedSeats((prev) => prev.filter((s) => s !== index));
      setPrice((prev) => prev - 50);
    } else {
      // select
      setSelectedSeats((prev) => [...prev, index]);
      setErrorMsg(null);
      setPrice((prev) => prev + 50);
    }
  };

  const sendMail = (bookingDetail) => {
    const templateParams = {
      user_email: bookingDetail.email,
      movie_name: bookingDetail.movieName,
      seat_numbers: bookingDetail.selectedSeats.join(", "),
      total_price: bookingDetail.totalPrice,
    };

    emailjs
      .send(
        "service_h5jvlah",
        "template_3iw2p2r",
        templateParams,
        import.meta.env.VITE_EMAILJS_KEY,
      )
      .then(() => {
        alert("Booking Confirmed & Email Sent!");
      })
      .catch(() => {
        alert("Email failed!");
      });
  };

  const handleConfirmBooking = () => {
    try {
      if (selectedSeats.length === 0) {
        setErrorMsg("Please select at least one seat before booking!");
        return;
      }
      const bookingDetail = {
        email: user.email,
        movieName: movieDetail.title,
        selectedSeats,
        totalPrice: price,
      };
      sendMail(bookingDetail);
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen p-6">
        <h1 className="font-bold text-2xl text-center mb-6">Booking Page</h1>
        <div className="bg-white p-4 rounded mb-6 max-w-md mx-auto">
          <h2 className="font-bold text-lg text-center">{movieDetail.title}</h2>
          <img
            src={`${MOVIE_IMAGE_URL}/${movieDetail.poster_path}`}
            alt="poster"
          />
        </div>

        <div className="max-w-md mx-auto">
          <h3 className="font-semibold mb-3">Select Seats</h3>
          <p className="text-lg font-medium bg-red-400 text-white">
            {errorMsg}
          </p>
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
            <button
              onClick={handleConfirmBooking}
              className=" bg-red-500 text-white font-semibold  border border-black rounded-sm"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
