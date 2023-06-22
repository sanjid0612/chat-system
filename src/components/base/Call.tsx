import React, { FC, ReactElement } from "react";
import Button from "./Button";
type callProps = {
  video?: boolean;
  groupClass?: string;
  title?: string;
  children: ReactElement;
  hasCallBtn?: boolean;
  closeCb: () => void;
  callEndCb?: () => void;
};
const Call: FC<callProps> = ({
  title,
  children,
  closeCb,
  callEndCb,
  groupClass,
  hasCallBtn = false,
}) => {
  return (
    <section className="w-[1328px] min-h-screen flex flex-col justify-start shadow rounded-tl-[10px] rounded-tr-[10px]">
      <div className="border-b border-gray py-11 px-11 flex flex-row justify-between items-center">
        <div className="text-red-400 text-[30px] leading-[14px] font-semibold font-poppins w-full text-center">
          {title}
        </div>
        <Button
          icon="fas fa-times-circle text-red-400 text-[40px]"
          actionCb={closeCb}
        />
      </div>
      <div className={`w-full pt-6 pb-4 h-full ${groupClass}`}>{children}</div>
      {hasCallBtn && (
        <div className="py-[74px] w-full flex justify-center items-center gap-x-[58px]">
          <div className="h-16 w-16 rounded-full flex justify-center items-center bg-gray">
            <Button
              icon="fas fa-microphone text-[#474747] text-[30px]"
              actionCb={() => {}}
            />
          </div>
          <div className="h-16 w-16 rounded-full flex justify-center items-center bg-gray">
            <Button
              icon="fa-solid fa-video-slash text-[#474747] text-[27px]"
              actionCb={() => {}}
            />
            {/* video button condition should implement here */}
          </div>
          <div className="h-16 w-16 rounded-full flex justify-center items-center bg-red-400">
            <Button
              icon="fas fa-phone text-white text-[27px]"
              actionCb={callEndCb}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Call;

