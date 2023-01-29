import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import classes from "./FormWrapper.module.css";

const FormWrapper = ({ children }) => {
  const uiMgr = useContext(uiCtx);
  const handleCloseModal = (e) => {
    if (e.target.className === "FormWrapper_article__UdFOh") {
      return uiMgr.dispatch({ type: "CLOSE" });
    }
    return;
  };
  return (
    <article onClick={handleCloseModal} className={classes.article}>
      {children}
    </article>
  );
};

export default FormWrapper;
