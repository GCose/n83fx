import { Space_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${spaceMono.className} ${spaceGrotesk.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;