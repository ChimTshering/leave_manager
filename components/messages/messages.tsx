import React from "react";

export default function Messages() {
  return (
    <div className="w-full flex flex-col items-center text-center mt-[20px] border-[1px] border-tertiary rounded-t-md overflow-hidden">
      <div className="flex w-full  justify-between">
        <div className="hidden lg:inline-block border-collapse border-[1px] bg-tertiary/70 border-tertiary flex-auto">
          SI
        </div>
        <div className="inline-block border-collapse border-[1px] bg-tertiary/70 border-tertiary flex-auto w-[12%]">
          Date
        </div>
        <div className="inline-block border-collapse border-[1px] bg-tertiary/70 border-tertiary flex-auto w-[20%]">
          Subject
        </div>
        <div className="hidden lg:inline-block border-collapse border-[1px] bg-tertiary/70 border-tertiary flex-auto w-[10%]">
          Type
        </div>
        <div className="hidden lg:inline-block border-collapse border-[1px] bg-tertiary/70 border-tertiary flex-auto w-[10%]">
          Status
        </div>
      </div>
      {Array(5).fill(null).map((_, i) => (
        <div key={i} className="flex w-full justify-between">
          <div className="hidden lg:inline-block border-collapse border-t-[1px] border-tertiary flex-auto">
            SI
          </div>
          <div className="inline-block border-collapse border-t-[1px] border-tertiary flex-auto w-[12%]">
            Date
          </div>
          <div className="inline-block border-collapse border-t-[1px] border-tertiary flex-auto w-[20%] line-clamp-1">
            Subject
          </div>
          <div className="hidden lg:inline-block border-collapse border-t-[1px] border-tertiary flex-auto w-[10%]">
            Type
          </div>
          <div className="hidden lg:inline-block border-collapse border-t-[1px] border-tertiary flex-auto w-[10%]">
            Status
          </div>
        </div>
      ))}
    </div>
  );
}
