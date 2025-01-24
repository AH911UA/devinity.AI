import React from 'react';
import GlobalStyle from "../GlobalStyle";

const Body = ({ children, colorBackground }) => {
  return (
    <>
      <GlobalStyle
        colorBackground={colorBackground}
      />
      {/* Other layout components */}
      {children}
    </>
  );
};

export default Body;
