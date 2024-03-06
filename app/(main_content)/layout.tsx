import MainNavBar from "@/components/shared/nav_bar/main_nav_bar";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function MainLayout({ children }: Props) {
  return (
    <div>
      <MainNavBar />
      <div className="lmd:mx-[200px] lg:mx-[300px] h-full bg-white shadow-md">{children}</div>
    </div>
  );
}
