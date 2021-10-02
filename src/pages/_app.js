import "tailwindcss/tailwind.css";
import "../../public/css/style.css";
import { ThemeProvider } from "next-themes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" forcedTheme={Component.theme || undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
