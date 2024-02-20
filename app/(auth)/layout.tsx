import React from "react";
import "../../assets/stylesheets/variable.scss";
import "../../assets/stylesheets/base.scss";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-auth-bg bg-center bg-cover h-screen text-white">
      <div className="bg-black/60 w-full h-full  p-[18px] md:px-[160px] md:py-[80px] lg:px-[300px] lg:py-[100px] justify-center items-center flex flex-col ">
        {children}
      </div>
    </div>
  )}