import classes from "./CartTotal.module.css";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const CartTotal = ({ cart }) => {
  const uiMgr = useContext(uiCtx);

  return (
    <p className={classes.pTotal}>
      {cart.reduce((acc, obj) => {
        return acc + obj.price;
      }, 0)}{" "}
      total{" "}
      {cart.length > 0 && (
        <span
          className={classes.span}
          onClick={() => uiMgr.dispatch({ type: "CHECKOUT" })}
        >
          check out
        </span>
      )}
    </p>
  );
};

export default CartTotal;
