import classes from "./ArtItemBtn.module.css";
import { useContext, useState } from "react";
import axios from "axios";
import { authCtx } from "../../features/auth-ctx";
import { uiCtx } from "../../features/ui-ctx";

const ArtItemBtn = ({ content, index, id }) => {
  const authMgr = useContext(authCtx);
  const uiMgr = useContext(uiCtx);

  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = async () => {
    if (!authMgr.isAuth) return uiMgr.dispatch({ type: "AUTH" });
    await axios
      .post(`/api/v1/user/${authMgr.currentUser.id}/cart`, { product: id })
      .then((serverRes) => {
        authMgr.setCurrentUser(serverRes.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={handleAdd}
      className={classes.btn}
      onMouseOver={() => setShowAdd(true)}
      onMouseOut={() => setShowAdd(false)}
    >
      {showAdd || `.0${index + 1}`}
      <span className={showAdd ? classes.showAdd : classes.hideAdd}>
        ${content}
      </span>
      <span className={showAdd ? classes.showAdd : classes.hideAdd}>add</span>
    </button>
  );
};

export default ArtItemBtn;
