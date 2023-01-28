import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import classes from "./Nav.module.css";
import { authCtx } from "../../features/auth-ctx";
import axios from "axios";

const Nav = () => {
  const uiMgr = useContext(uiCtx);
  const authMgr = useContext(authCtx);
  const handleLogout = async () => {
    await axios
      .get("/api/v1/auth/logout")
      .then(() => {
        authMgr.setIsAuth(false);
        authMgr.setCurrentUser({ cart: [] });
        uiMgr.dispatch({ type: "CLOSE" });
      })
      .catch((err) => console.log(err));
  };
  return (
    <ul className={classes.ul}>
      <a href="#expo" className={classes.li}>
        Expo
      </a>
      <a href="#us" className={classes.li}>
        Us
      </a>

      <li
        onClick={() => {
          authMgr.isAuth ? handleLogout() : uiMgr.dispatch({ type: "AUTH" });
        }}
        className={classes.li}
      >
        {authMgr.isAuth ? "Leave" : "Login"}
      </li>
    </ul>
  );
};

export default Nav;
