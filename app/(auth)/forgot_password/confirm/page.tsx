import { RoundedContainer } from "@/components/shared/auth_form/container.style";
import { Button } from "@/components/shared/button";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import React from "react";

const ConfirmForgotPassword = () => {
  return (
    <RoundedContainer>
      <div className="flex flex-col items-center text-center p-[20px]">
        <Logo showText size={50}/>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          officiis.
        </p>
        <h1 className="text-primary">Thank You </h1>
        <Link href="/">
          <Button className="bg-primary text-white font-bold hover:bg-secondary my-[20px] w-[100px] ">
            OK
          </Button>
        </Link>
      </div>
    </RoundedContainer>
  );
};

export default ConfirmForgotPassword;
