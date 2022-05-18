import "../styles/globals.css";
import type { AppProps } from "next/app";
import {ThemeProvider} from "../components/common/dark-light-mode/themeContext.tsx";
import Background from "../components/common/dark-light-mode/background.tsx";
function MyApp({ Component, pageProps }: AppProps) {
	return(
		<ThemeProvider>
                        <Component {...pageProps} />
		</ThemeProvider>
	)

}

export default MyApp
