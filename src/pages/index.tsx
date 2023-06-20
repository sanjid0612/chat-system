import Image from "next/image";
import { Inter } from "next/font/google";
import ChatPage from "./chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ChatPage />
    </>
  );
}

