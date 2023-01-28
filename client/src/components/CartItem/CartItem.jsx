import classes from "./CartItem.module.css";
import { uiCtx } from "../../features/ui-ctx";
import { authCtx } from "../../features/auth-ctx";
import { useContext } from "react";
import axios from "axios";

const CartItem = ({ obj }) => {
  const uiMgr = useContext(uiCtx);
  const authMgr = useContext(authCtx);

  const removeHandler = async (itemId) => {
    if (!authMgr.isAuth) return uiMgr.dispatch({ type: "AUTH" });
    await axios
      .patch(`/api/v1/user/${authMgr.currentUser.id}/cart`, { product: itemId })
      .then((serverRes) => {
        authMgr.setCurrentUser(serverRes.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.card}>
      <img alt="wall/street art" className={classes.img} src={obj.url} />
      <div className={classes.txtBox}>
        <p className={classes.pTitle}>{obj.title}</p>
        <p className={classes.pDes}>{obj.description}</p>
        <p className={classes.pArtist}>- {obj.artist}</p>
        <p className={classes.pPrice}>${obj.price}</p>
        <p className={classes.pRemove} onClick={() => removeHandler(obj.id)}>
          remove
        </p>
      </div>
    </div>
  );
};

export default CartItem;
