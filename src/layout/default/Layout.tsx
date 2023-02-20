import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useCheckDeviceSize } from "../../customhook";

interface LayoutProps {
  children: React.ReactNode;
  indexPage: boolean;
}

function Layout({ children, indexPage }: LayoutProps) {
  useCheckDeviceSize();
  return (
    <>
      <Header />
      <Main indexPage={indexPage}>{children}</Main>
    </>
  );
}

export default Layout;
