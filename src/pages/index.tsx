import Image from "next/image";
import { Inter } from "next/font/google";
import ChatPage from "./messenger";
import AudioCall from "@/components/common/AudioCall";
import VideoCall from "@/components/common/VideoCall";
import ChatNotFound from "@/components/common/chatNotFound";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-10">
      <ChatPage />
      <AudioCall />
      <VideoCall />
      <ChatNotFound />
    </div>
  );
}

