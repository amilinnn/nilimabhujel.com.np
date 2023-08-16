import React, { ReactNode } from "react";
import DotRing from "./cursor/DotRing";
import MouseContextProvider from "@/utils/MouseContext";
import NavBar from "@/components/shared/NavBar";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  pageProps: any
}

const Layout = ({ children, pageProps }: Props) => {
  const router = useRouter();
  return (
    <>
      <MouseContextProvider>
        <header>{router.pathname !== "/404" && <NavBar pageProps={pageProps}/>}</header>
        {children}
        <DotRing />
      </MouseContextProvider>
    </>
  );
};

export default Layout;
