import classes from "./PayConfirm.module.css";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const PayConfirm = ({ setShowConfirm }) => {
  const uiMgr = useContext(uiCtx);
  return (
    <div className={classes.confirm}>
      <p>Payment successful</p>
      <button
        className={classes.btn}
        onClick={() => {
          setShowConfirm(false);
          uiMgr.dispatch({ type: "CLOSE" });
        }}
      >
        RETURN
      </button>
    </div>
  );
};

export default PayConfirm;
