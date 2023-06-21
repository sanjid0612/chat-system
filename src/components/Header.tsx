import React from "react";
import Button from "./base/Button";
import MsgSideBar from "./common/MsgSideBar";
import MsgSideBar2 from "./common/MsgSideBar2";

const Header = () => {
  return (
    <div className="flex flex-row justify-between py-[23px] px-[34px]">
      <div className=""></div>
      <div className="">
        <button
          type="button"
          className="w-[55px] h-[55px] rounded-full bg-red-300"
        >
          <i className="fa-regular fa-comment-dots text-red-400 text-[32px]"></i>
        </button>
      </div>
      {/* <MsgSideBar /> */}
      <MsgSideBar2 />
    </div>
  );
};

export default Header;

