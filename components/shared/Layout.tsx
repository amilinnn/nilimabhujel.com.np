import React, { ReactNode } from "react";
import Navbar from "@/components/shared/NavBar";
import DotRing from "./cursor/DotRing";
import MouseContextProvider from "@/utils/MouseContext";
import NavBar from "@/components/shared/NavBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <MouseContextProvider>
        <header>
          <NavBar />
        </header>
        {children}
        <DotRing />
      </MouseContextProvider>
    </>
  );
};

export default Layout;
