import { Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={playfairDisplay.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
