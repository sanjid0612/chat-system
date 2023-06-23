import Image from "next/image";
import { Inter } from "next/font/google";
import ChatPage from "./messenger";
import AudioCall from "@/components/common/AudioCall";
import VideoCall from "@/components/common/VideoCall";
import ChatNotFound from "@/components/common/ChatNotFound";
import MiniChatPage from "./mini-chat";
import Header from "@/components/Header";
import ActionBtnModal from "@/components/base/ActionModal";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <div className="p-10 flex flex-col gap-10">
      <Header />
      <MiniChatPage />
      <ChatPage />
      <AudioCall />
      <VideoCall />
      <ChatNotFound />
      <ActionBtnModal
        modalStates={{
          viewBtn: {
            label: "view profile",
            actionCb: () => {
              router.push("/admin/dummyUserId/admin/details");
            },
          },
          editBtn: {
            label: "edit ",
            actionCb: () => {},
          },
          deleteBtn: {
            label: "delete chat",
            actionCb: () => {},
          },
          blockBtn: {
            label: "block",
            actionCb: () => {},
          },
        }}
      />
    </div>
  );
}

