import "@/styles/globals.css";
import "@/styles/all.min.css";
import { Poppins, Inter } from "next/font/google";
import type { AppProps } from "next/app";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

