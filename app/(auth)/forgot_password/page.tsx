import { RoundedContainer } from "@/components/shared/auth_form/container.style";
import { Button } from "@/components/shared/button";
import Input from "@/components/shared/input";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <RoundedContainer>
      <div className="flex flex-col items-center mb-[8px] md:mx-[40px] p-[12px] pt-[30px]">
        <Logo  showText size={50}/>
        <h1 className="text-primary mb-[20px] mt-[10px]">Forgot your password</h1>
        <p className="text-black/70 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          delectus sint officia commodi possimus vel! Doloremque deleniti
          delectus quis rem. Assumenda reprehenderit in accusamus distinctio
          corrupti nesciunt unde molestiae eum!
        </p>
        <form action="" className="flex flex-col items-center w-full mt-[30px]" noValidate>
          <Input
            label="Email"
            name="email_address"
            type="email"
            placeholder="Enter Email address"
          />
          <Link href="/forgot_password/confirm" className="inline-block w-full my-[16px]">
            <Button type="submit" className="text-white bg-primary w-full">
              Send
            </Button>
          </Link>
        </form>
      </div>
    </RoundedContainer>
  );
};

export default ForgotPasswordPage;
