import React, { FunctionComponent } from "react";

// components
import Header from "../Header";
import Footer from "../Footer";
import LinePrivacyPolicy from "../LinePrivacyPolicy";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <LinePrivacyPolicy />
    </div>
  );
};

export default Layout;
