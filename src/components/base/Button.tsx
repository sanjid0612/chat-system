import React, { FC, ReactElement } from "react";

type buttonProps = {
  btnType?: "submit" | "reset" | "button";
  btnText?: string;
  btnClass?: string;
  icon?: string;
  suffixIcon?: string;
  prefixIcon?: string;
  variant?: "primary" | "outlined" | "gray" | "naked" | "link";
} & (
  | {
      btnType?: "reset" | "button";
      actionCb: () => void;
    }
  | {
      btnType?: "submit";
      actionCb?: never;
    }
);

const Button: FC<buttonProps> = ({
  btnText,
  icon,
  suffixIcon,
  prefixIcon,
  btnClass,
  actionCb,
  btnType = "button",
  variant = "primary",
}) => {
  return (
    <button
      type={btnType}
      onClick={actionCb}
      className={`w-full font-medium flex justify-center items-center ${
        icon ? "px-0 py-0" : ""
      } ${suffixIcon ? "flex gap-x-2" : ""} ${
        prefixIcon ? "flex gap-x-2" : ""
      } ${
        btnText ? "text-[18px] leading-[27px] text-center py-[26px] px-7" : ""
      } ${
        variant === "primary"
          ? "bg-green-400 text-white"
          : variant === "outlined"
          ? "bg-white text-black-primary border border-black-primary"
          : variant === "gray"
          ? "text-gray border-gray border bg-white"
          : variant === "naked"
          ? "text-gray bg-white"
          : variant === "link"
          ? "text-gray bg-white underline"
          : ""
      } ${btnClass}`}
    >
      {prefixIcon && <i className={`text-[16px] ${prefixIcon}`}></i>}
      {icon && <i className={`text-[16px] ${icon}`}></i>}
      {btnText}
      {suffixIcon && <i className={`text-[16px] ${suffixIcon}`}></i>}
    </button>
  );
};

export default Button;

