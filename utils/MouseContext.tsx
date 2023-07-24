import React, { createContext, useContext, useState } from "react";

const appContextDefaultValues: any = {
  cursorType: "",
  cursorChangeHandler: () => {},
};

const MouseContext = createContext<any>(
  appContextDefaultValues
);

export function useMouseCursor(): any {
  return useContext(MouseContext);
}

const MouseContextProvider = ({ children }: any) => {
  const [cursorType, setCursorType] = useState<string>("");

  const cursorChangeHandler = (cursorType: React.SetStateAction<string>) => {
    setCursorType(cursorType);
  };

  const mouseContext = {
    cursorType: cursorType,
    cursorChangeHandler: cursorChangeHandler,
  };
  return (
    <MouseContext.Provider value={mouseContext}>
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
