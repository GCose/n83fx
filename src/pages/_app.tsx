import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${playfairDisplay.className} ${spaceGrotesk.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
