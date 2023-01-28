import classes from "./CheckoutForm.module.css";
import { cardStyle } from "../../assets/card-style";
import React, { useContext, useState } from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { authCtx } from "../../features/auth-ctx";
import { uiCtx } from "../../features/ui-ctx";

const CheckoutForm = ({ setShowConfirm }) => {
  const stripe = useStripe();
  const elements = useElements();
  const authMgr = useContext(authCtx);
  const uiMgr = useContext(uiCtx);
  const [err, setErr] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      await axios
        .post(`/api/v1/user/${authMgr.currentUser.id}/cart/checkout`, {
          id: paymentMethod.id,
          amount: authMgr.currentUser.cart.reduce((acc, obj) => {
            return acc + obj.price;
          }, 0),
        })
        .then((serverRes) => {
          authMgr.setCurrentUser(serverRes.data);
          setShowConfirm(true);
        })
        .catch((err) => setErr(true));
    }
  };
  return (
    <div className={classes.formBox}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p className={classes.title}>Checkout</p>
        <CardElement options={cardStyle} />
        <input
          className={classes.input}
          type={"text"}
          placeholder="Address"
          value="P. Sherman"
          readOnly
        />
        <input
          className={classes.input}
          type={"text"}
          placeholder="Address 2"
          value={"42 Wallaby Way"}
          readOnly
        />
        <input
          className={classes.input}
          type={"text"}
          placeholder="City"
          value="Sydney"
          readOnly
        />
        <input
          className={classes.input}
          type={"text"}
          placeholder="Zip"
          value="11111"
          readOnly
        />
        <div className={classes.btnBox}>
          <button
            className={classes.btn}
            type="submit"
            disabled={!stripe || !elements}
            onClick={(e) => {
              e.preventDefault();
              uiMgr.dispatch({ type: "CLOSE" });
            }}
          >
            CANCEL
          </button>
          <button
            className={classes.btn}
            type="submit"
            disabled={!stripe || !elements}
          >
            PAY
          </button>
        </div>
        {err && <p>Something is wrong with your payment</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
