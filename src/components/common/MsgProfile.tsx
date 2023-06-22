import { MsgProfileProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const MsgProfile: FC<MsgProfileProps> = ({
  image,
  name,
  lastMsg,
  time,
  totalMsg,
}) => {
  return (
    <Link
      href={""}
      className="flex flex-row justify-start items-center gap-x-3 w-full"
    >
      <div className="h-[70px] w-[70px] flex justify-center bg-[#f4f4f4] items-center rounded-full overflow-hidden relative">
        {image ? (
          <Image src={image} alt={"image"} fill className="object-cover" />
        ) : (
          <i className="fas fa-user-alt text-[32px] text-[#b6b5b5]"></i>
        )}
      </div>
      <div className="flex flex-col justify-start gap-y-0.5 w-[79%]">
        <div className="flex flex-row justify-between ">
          <h6 className="text-black capitalize font-poppins text-[18px] leading-[27px] font-medium">
            {name}
          </h6>
          <span
            className={`text-[14px] leading-[21px] font-medium font-poppins text-red-400`}
          >
            {time}
          </span>
        </div>
        <div className="flex flex-row justify-between gap-x-1.5 ">
          <p className="text-[14px] font-poppins font-normal text-[#474B54] leading-[21px]">
            {lastMsg}
          </p>
          {totalMsg && (
            <span className="h-5 w-5 flex flex-row justify-center items-center rounded-full bg-red-400 text-white font-normal text-[14px] leading-4 ">
              {totalMsg}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MsgProfile;

