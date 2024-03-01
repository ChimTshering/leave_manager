"use client"
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import React, { useMemo, useState } from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string, isPassword?:boolean };

const Input = (props: Props) => {
  const [isVisible, setIsVisible] = useState(props?.type==="password")
  const inputType = useMemo(()=>{
    if(props?.type==="password" && isVisible){
      return props?.type
    }
    return "text"
  },[isVisible, props?.type])
  
  return (
    <div className="flex flex-col my-[8px] relative w-full">
      <label htmlFor={props?.name} className="text-secondary text-[16px]">
        {props?.label}
      </label>
      <input
        {...props}
        type={inputType || "text"}
        className="border-[1px] px-[10px] py-[6px] rounded-md border-tertiary/50 mt-[6px] focus:outline-tertiary/65"
      />
      {props?.type === "password" && (
        <div
          className="absolute top-[38px] right-[8px] bg-white text-black/50"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <EyeSlashIcon className="w-[20px]" />
          ) : (
            <EyeIcon className="w-[20px]" />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
