import "tailwindcss/tailwind.css";
import "../../public/css/style.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" forcedTheme={Component.theme || undefined}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
