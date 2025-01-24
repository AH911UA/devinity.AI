import React, {createContext, useState} from "react";

const ShowCalculatorContext = createContext();

export const ShowCalculatorProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ShowCalculatorContext.Provider value={{ show, setShow }}>
      {children}
    </ShowCalculatorContext.Provider>
  );
}

export default ShowCalculatorContext;
