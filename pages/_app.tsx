import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/common/dark-light-mode/themeContext.tsx";
import ReactGA from "react-ga";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID!);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
