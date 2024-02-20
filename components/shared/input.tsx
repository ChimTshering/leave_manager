import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const Input = (props: Props) => {
  return (
    <div className="flex flex-col my-[8px]">
      <label htmlFor={props?.name} className="text-secondary text-[16px]">
        {props?.label}
      </label>
      <input {...props} className="border-[1px] px-[10px] py-[6px] rounded-md border-tertiary mt-[6px] focus:outline-secondary" />
    </div>
  );
};

export default Input;
