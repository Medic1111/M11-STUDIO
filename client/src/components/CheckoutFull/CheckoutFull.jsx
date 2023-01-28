import classes from "./CheckoutFull.module.css";
import { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import PayConfirm from "../PayConfirm/PayConfirm";

const CheckoutFull = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <article className={classes.article}>
      {!showConfirm && <CheckoutForm setShowConfirm={setShowConfirm} />}
      {showConfirm && <PayConfirm setShowConfirm={setShowConfirm} />}
    </article>
  );
};

export default CheckoutFull;
