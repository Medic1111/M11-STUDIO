import { createContext, useState } from "react";

export const authCtx = createContext({
  isLoggin: false,
  setIsLoggin: () => {},
  isAuth: false,
  setIsAuth: () => {},
  currentUser: {},
  setCurrentUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({ cart: [] });
  return (
    <authCtx.Provider
      value={{
        isLoggin,
        setIsLoggin,
        isAuth,
        setIsAuth,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </authCtx.Provider>
  );
};

export default AuthProvider;
