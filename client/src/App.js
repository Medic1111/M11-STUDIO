import { useContext, useEffect } from "react";
import { uiCtx } from "./features/ui-ctx";
import { authCtx } from "./features/auth-ctx";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Showroom from "./components/Showroom/Showroom";
import About from "./components/About/About";
import Modal from "./common/Modal/Modal";
import SideNav from "./common/SideNav/SideNav";
import Spinner from "./common/Spinner/Spinner";
import axios from "axios";

function App() {
  const uiMgr = useContext(uiCtx);
  const authMgr = useContext(authCtx);

  const validateCookie = async () => {
    await axios
      .get("/api/v1/auth/validate")
      .then((serverRes) => {
        authMgr.setCurrentUser(serverRes.data.user);
        authMgr.setIsAuth(true);
      })
      .catch((err) => {
        authMgr.setIsAuth(false);
        authMgr.setCurrentUser({ cart: [] });
      });
  };

  useEffect(() => {
    validateCookie();
  }, []);

  return (
    <div className="App">
      {uiMgr.isLoading && <Spinner />}
      <SideNav />
      {uiMgr.state.showModal && <Modal />}
      <Home />
      <Showroom />
      <About />
      <Footer />
    </div>
  );
}

export default App;
