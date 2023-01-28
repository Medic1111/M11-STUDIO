export const initialState = {
  showModal: false,
  showArtDetail: false,
  showCart: false,
  showCheckout: false,
  showAuth: false,
};

const UiRed = (state, action) => {
  switch (action.type) {
    case "CLOSE": {
      return { ...initialState };
    }
    case "ART_DETAIL": {
      return { ...initialState, showArtDetail: true, showModal: true };
    }
    case "CART": {
      return { ...initialState, showCart: true, showModal: true };
    }
    case "CHECKOUT": {
      return { ...initialState, showCheckout: true, showModal: true };
    }
    case "AUTH": {
      return { ...initialState, showAuth: true, showModal: true };
    }
    default:
      return { ...initialState };
  }
};

export default UiRed;
