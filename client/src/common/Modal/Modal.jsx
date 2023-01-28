import { useContext } from "react";
import ArtDetail from "../../components/ArtDetail/ArtDetail";
import Auth from "../../components/Auth/Auth";
import Cart from "../../components/Cart/Cart";
import Checkout from "../../components/Checkout/Checkout";
import { uiCtx } from "../../features/ui-ctx";
import Portal from "../../portal/Portal";

const Modal = () => {
  const uiMgr = useContext(uiCtx);
  return (
    <Portal>
      {uiMgr.state.showArtDetail && <ArtDetail />}
      {uiMgr.state.showAuth && <Auth />}
      {uiMgr.state.showCart && <Cart />}
      {uiMgr.state.showCheckout && <Checkout />}
    </Portal>
  );
};

export default Modal;
