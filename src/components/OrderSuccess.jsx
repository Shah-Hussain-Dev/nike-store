import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import order1 from "../assets/lottie/order-1.json";
import order2 from "../assets/lottie/order-2.json";
import { Link, useNavigate } from "react-router-dom";
const OrderSuccess = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setOrderPlaced(true);
    }, 2500);
  }, [orderPlaced]);

  const backToHome = () => {
    localStorage.removeItem("cart");
    navigate("/");
    location.reload();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {!orderPlaced ? (
        <div className="flex justify-center items-center flex-col">
          <Lottie
            animationData={order1}
            loop={true}
            className=" drop-shadow-lg "
          />
          <h1 className="font-bold text-2xl text-green-600">
            Your order has been Placed!
          </h1>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-6 px-3">
          <Lottie
            animationData={order2}
            loop={true}
            className=" drop-shadow-lg "
          />
          <h1 className="font-bold text-2xl text-green-600">
            Thank you for your Purchase!
          </h1>
          <h1 className="font-bold text-2xl text-blue-400 ">
            We Will Deliver your Product very Soon.
          </h1>
          <button
            onClick={backToHome}
            className="bg-blue-400 px-4 py-3 rounded-lg text-white
          shadow-lg"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSuccess;
