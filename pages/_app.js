import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
