import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightStartOnRectangleIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import Logo from "../logo";
import NavList from "./nav_list";

const MainNavBar = () => {
  return (
    <div className="flex px-[24px] items-end w-screen bg-white h-[60px] drop-shadow-md sticky top-0 z-50">
      <div>
        <Bars4Icon className="text-black h-[50px] lg:hidden" />
      </div>
      <div className="mt-[4px] hidden lg:block pr-[20px]">
        <Logo size={40} showText font={20} />
      </div>
      <Suspense fallback={"... ... ..."}>
        <NavList />
      </Suspense>
      <div className="w-full justify-end h-full py-[4px] items-center flex ">
        <Link href="/login" className=" flex items-center">
          <ArrowRightStartOnRectangleIcon className="h-[50px] text-black/70" />
        </Link>
      </div>
    </div>
  );
};

export default MainNavBar;
