import Image from "next/image";
import { Inter } from "next/font/google";
import ChatPage from "./messenger";
import AudioCall from "@/components/common/AudioCall";
import VideoCall from "@/components/common/VideoCall";
import ChatNotFound from "@/components/common/ChatNotFound";
import MiniChatPage from "./mini-chat";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-10">
      <Header />
      <MiniChatPage />
      <ChatPage />
      <AudioCall />
      <VideoCall />
      <ChatNotFound />
    </div>
  );
}

