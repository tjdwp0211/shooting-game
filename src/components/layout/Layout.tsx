import React from "react";
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Main from "./elements/Main";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
