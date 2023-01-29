import { createContext, useReducer, useState } from "react";
import UiRed, { initialState } from "../reducers/ui-red";

export const uiCtx = createContext({
  selectedArt: {},
  setSelectedArt: () => {},
  state: initialState,
  dispatch: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

const UiProvider = ({ children }) => {
  const [selectedArt, setSelectedArt] = useState({});
  const [state, dispatch] = useReducer(UiRed, initialState);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <uiCtx.Provider
      value={{
        selectedArt,
        setSelectedArt,
        state,
        dispatch,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </uiCtx.Provider>
  );
};

export default UiProvider;
