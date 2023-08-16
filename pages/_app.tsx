import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/shared/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
