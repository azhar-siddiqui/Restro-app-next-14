"use client";
import React, { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [signUpPage, setSignUpPage] = useState(false);

  const handleToggleSignUp = () => {
    setSignUpPage(!signUpPage);
  };
  return (
    <>
      {!signUpPage ? (
        <RestaurantLogin handleToggleSignUp={handleToggleSignUp} />
      ) : (
        <RestaurantSignUp handleToggleSignUp={handleToggleSignUp} />
      )}
    </>
  );
};

export default Restaurant;
