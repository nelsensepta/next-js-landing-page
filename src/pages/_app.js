import "tailwindcss/tailwind.css";
import "../../public/css/style.css";
import { ThemeProvider } from "next-themes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faAlignRight,
  faArrowUp,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faSun,
  faMoon,
  faAlignRight,
  faArrowUp,
  faChevronUp,
  faInstagram,
  faTwitter,
  faYoutube
);
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
