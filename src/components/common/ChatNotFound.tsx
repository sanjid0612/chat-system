import React from "react";
import Call from "../base/Call";

const ChatNotFound = () => {
  return (
    <Call title="Chat" closeCb={() => {}} groupClass="pt-[189px]">
      <div className="w-full">
        <i className="fa-regular fa-message"></i>
        <p className="text-[30px] leading-[14px] font-semibold font-poppins text-black mt-[113px]">
          No Message Found
        </p>
      </div>
    </Call>
  );
};

export default ChatNotFound;

