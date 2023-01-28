import { useContext } from "react";
import { authCtx } from "../../features/auth-ctx";
import { uiCtx } from "../../features/ui-ctx";

const CloseModal = ({ className, text }) => {
  const uiMgr = useContext(uiCtx);
  const authMgr = useContext(authCtx);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        authMgr.setIsLoggin(true);
        uiMgr.dispatch({ type: "CLOSE" });
      }}
      className={className}
    >
      {text}
    </button>
  );
};

export default CloseModal;
