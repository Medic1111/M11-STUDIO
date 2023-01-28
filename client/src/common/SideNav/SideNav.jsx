import React, { useContext } from "react";
import classes from "./SideNav.module.css";
import { authCtx } from "../../features/auth-ctx";
import { uiCtx } from "../../features/ui-ctx";
import axios from "axios";
const SideNav = () => {
  const authMgr = useContext(authCtx);
  const uiMgr = useContext(uiCtx);

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
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {!authMgr.isAuth ? (
          <li>
            <span
              onClick={() => uiMgr.dispatch({ type: "AUTH" })}
              style={{ fontSize: "5em" }}
              className={`${classes.li} material-symbols-outlined`}
            >
              login
            </span>
          </li>
        ) : (
          <>
            <li>
              <span
                onClick={handleLogout}
                style={{ fontSize: "5em" }}
                className={`${classes.li} material-symbols-outlined`}
              >
                logout
              </span>
            </li>
            <li>
              <span
                onClick={() => uiMgr.dispatch({ type: "CART" })}
                style={{ fontSize: "5em" }}
                className={`${classes.li} material-symbols-outlined`}
              >
                shopping_bag
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;
