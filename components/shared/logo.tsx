import React from "react";
import Image from "next/image";

interface Props{
  showText?:boolean
  size?:10 | 20 | 30 | 40 | 50 | 60 | 70
  font?:number
}
const Logo = ({showText, size, font}:Props) => {
  return (
    <div className="text-black flex items-baseline justify-center space-x-[8px]">
        <Image
          src="/images/main_logo.png"
          alt="leave hub logo"
          width={size || 40}
          height={size || 40}
        />
      {showText && <h2 className={`relative text-[${font || 32}px] bottom-[4px]`}>
        Leave
        <span className="bg-primary text-tertiary px-[2px] rounded-lg">
          Hub
        </span>
      </h2>}
    </div>
  );
};

export default Logo;
