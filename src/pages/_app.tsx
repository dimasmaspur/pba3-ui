import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Questrial } from "next/font/google";
const questrial = Questrial({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${questrial.className} bg-white`}>
      <Component {...pageProps} />
    </div>
  )
}
