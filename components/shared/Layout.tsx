import React, { ReactNode } from "react";
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
        {children}
        <DotRing />
      </MouseContextProvider>
    </>
  );
};

export default Layout;
