import React, { ReactNode } from "react";
import Navbar from "@/components/shared/NavBar";
import DotRing from "./cursor/DotRing";
import MouseContextProvider from "@/utils/MouseContext";
import NavBar from "@/components/shared/NavBar";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <>
      <MouseContextProvider>
        <header>{router.pathname !== "/404" && <NavBar />}</header>
        {children}
        <DotRing />
      </MouseContextProvider>
    </>
  );
};

export default Layout;
