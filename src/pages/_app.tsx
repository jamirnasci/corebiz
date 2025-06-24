import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
//import 'bootstrap/dist/js/bootstrap.min.js';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.min.js')
  })
  return <Component {...pageProps} />;
}
