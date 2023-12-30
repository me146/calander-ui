import { AppProps } from "next/app";
import "../globals.css";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col h-screen w-full bg-white">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default (MyApp);
