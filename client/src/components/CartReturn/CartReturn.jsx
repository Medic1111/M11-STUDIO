import classes from "./CartReturn.module.css";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const CartReturn = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <span
      onClick={() => uiMgr.dispatch({ type: "CLOSE" })}
      className={`${classes.return} material-symbols-outlined`}
    >
      keyboard_return
    </span>
  );
};

export default CartReturn;
