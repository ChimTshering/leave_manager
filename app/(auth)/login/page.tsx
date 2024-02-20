import { RoundedContainer } from "@/components/shared/auth_form/container.style";
import { logIn } from "@/server_actions/log_in.action";
import Link from "next/link";
import React from "react";
import Input from "@/components/shared/input";
import { Button } from "@/components/shared/button";

const LogInPage = () => {
  return (
    <RoundedContainer>
      <div className="bg-white text-black p-[16px] mx-[20px]">
        <form
          action={logIn}
          method="POST"
          noValidate
          className="flex flex-col items-center mb-[8px]"
        >
          <h1 className="text-primary mb-[12px]">Log In</h1>
          <Input
            label="Email"
            name="email"
            placeholder="Enter your Email"
            type="email"
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter your Password"
            type="password"
          />
          <Button
            className="bg-primary text-white font-bold hover:bg-secondary my-[20px] "
            type="submit"
          >
            Sign Up
          </Button>

          <Link href="/forgot_password" className="link">
            Forgot Password ?
          </Link>
          <div className="flex justify-center items-center text-[16px] mt-[6px]">
            <p>Don&apos;t have an Account? &nbsp;</p>
            <Link href="#" className="link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </RoundedContainer>
  );
};

export default LogInPage;
