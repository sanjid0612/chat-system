import Button from "@/components/base/Button";
import TextField from "@/components/base/TextField";
import CommonProfile from "@/components/common/CommonProfile";
import Image from "next/image";
import React from "react";

const MiniChatPage = () => {
  return (
    <div className="w-[360px] h-[514px] shadow rounded-[10px] bg-white flex flex-col justify-start ml-10">
      <div className="flex flex-row justify-between px-2 pt-[5px] pb-2.5 border-b border-black">
        <CommonProfile name="Martha Craig" />
        <div className="flex flex-row justify-center items-center gap-x-2">
          <Button
            icon="fas fa-phone text-red-400 text-[18px] mr-[3px]"
            actionCb={() => {}}
          />
          <Button
            icon="fas fa-video text-red-400 text-[21px]"
            actionCb={() => {}}
          />
          <Button
            icon="fas fa-minus text-red-400 text-[21px] mr-0.5"
            actionCb={() => {}}
          />
          <Button
            icon="fas fa-times-circle text-red-400 text-[21px]"
            actionCb={() => {}}
          />
        </div>
      </div>
      {/* mini chat header ends */}
      <div className="flex w-full flex-col justify-start gap-y-[50px] pt-6 pl-3 pr-6 pb-2">
        <CommonProfile
          name="Martha Craig"
          details="You’re friends on Facebook"
          groupClass="flex-col"
          imgClass="h-[86px] w-[86px]"
          nameClass="textShadow text-[20px] leading-[30px]"
          detailClass="textShadow"
        />
        <div className="flex w-full flex-col justify-start gap-y-10">
          <div className="text-right flex ml-auto flex-row justify-start gap-x-1 ">
            <p className="bgAsh rounded-[18px] rounded-br-[4px] pr-[11px] pl-1.5 py-[7px]">
              Shahriar Hossain
            </p>
            <i className="mt-auto far fa-check-circle text-[8px] text-[#004cff]"></i>
          </div>
          <div className="flex flex-row justify-start gap-x-3">
            <div className="mt-auto h-[25.66px] w-[25.66px] rounded-full overflow-hidden relative">
              <Image
                fill
                src={
                  "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                }
                alt="image"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <p className="bgAsh rounded-[18px] rounded-bl-[4px] pl-[11px] pr-1.5 py-[7px]">
                Hello, Jacob!
              </p>
              <p className="bgAsh rounded-[18px] rounded-tl-[4px] pl-[11px] pr-1.5 py-[7px]">
                How are you doing?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mini chat body ends  */}
      <div className="flex flex-row justify-start gap-x-4 pt-2.5 pb-[30px] pl-4 pr-[13px]">
        <Button
          icon="fas fa-file text-red-400 text-[24px] "
          actionCb={() => {}}
        />
        <Button
          icon="fas fa-camera text-red-400 text-[24px] mr-1"
          actionCb={() => {}}
        />
        <Button
          icon="fas fa-image text-red-400 text-[21px] mr-2"
          actionCb={() => {}}
        />
        <Button
          icon="fas fa-microphone text-red-400 text-[23px]"
          actionCb={() => {}}
        />
        <TextField
          onChangeCb={() => {}}
          identifier=""
          placeholder="Aa"
          suffixIcon="fa-sharp fa-solid fa-face-smile"
        />
        <Button
          icon="fas fa-thumbs-up text-red-400 text-[24px]"
          actionCb={() => {}}
        />
      </div>
    </div>
  );
};

export default MiniChatPage;

