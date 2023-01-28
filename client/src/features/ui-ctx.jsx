import { createContext, useReducer, useState } from "react";
import UiRed, { initialState } from "../reducers/ui-red";

export const uiCtx = createContext({
  selectedArt: {},
  setSelectedArt: () => {},
  state: initialState,
  dispatch: () => {},
});

const UiProvider = ({ children }) => {
  const [selectedArt, setSelectedArt] = useState({});
  const [state, dispatch] = useReducer(UiRed, initialState);
  return (
    <uiCtx.Provider
      value={{
        selectedArt,
        setSelectedArt,
        state,
        dispatch,
      }}
    >
      {children}
    </uiCtx.Provider>
  );
};

export default UiProvider;
