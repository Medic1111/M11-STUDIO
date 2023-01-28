import React from "react";
import { Slide } from "react-awesome-reveal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFull from "../CheckoutFull/CheckoutFull";

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <Slide direction="up">
        <CheckoutFull />
      </Slide>
    </Elements>
  );
};

export default Checkout;
