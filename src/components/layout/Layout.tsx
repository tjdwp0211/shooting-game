import React from "react";
import { Header, Main, Footer } from "./elements";

interface LayoutProps {
  children: React.ReactNode;
  indexPage: boolean;
}

function Layout({ children, indexPage }: LayoutProps) {
  return (
    <>
      <Header />
      <Main indexPage={indexPage}>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
