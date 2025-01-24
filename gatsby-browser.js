import React from 'react';
import Layout from "./src/components/Layout";
// import { ShowCalculatorProvider } from "./src/context/ShowCalculatorProvider";
import 'normalize.css';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

// export const wrapRootElement = ({ element }) => (
//   <ShowCalculatorProvider>{element}</ShowCalculatorProvider>
// );
