"use client";

import React from "react";
import Input from "../../input";
import { Button } from "../../button";
import Link from "next/link";
import { Field, Form } from "react-final-form";
import { SignInPayload } from "@/models/auth.model";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const {push} = useRouter()
  const submit = (value: SignInPayload) => {
    console.log(value);
    push('/login')
  };
  return (
    <Form
      onSubmit={submit}
      render={({ handleSubmit }) => {
        return (
          <form
            noValidate
            className="flex flex-col items-center mb-[8px] md:mx-[40px]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-primary mb-[12px]">Sign Up</h1>
            <Field
              name="user_name"
              render={({ input }) => {
                return (
                  <Input
                    {...input}
                    label="User Name"
                    placeholder="New User Name"
                    type="text"
                  />
                );
              }}
            />
            <Field
              name="email"
              render={({ input }) => {
                return (
                  <Input
                    {...input}
                    label="Email"
                    placeholder="Enter your Email"
                    type="email"
                  />
                );
              }}
            />
            <Field
              name="password"
              render={({ input }) => {
                return (
                  <Input
                    {...input}
                    label="Password"
                    placeholder="Enter your Password"
                    type="password"
                  />
                );
              }}
            />
            <Field
              name="confirm_password"
              render={({ input }) => {
                return (
                  <Input
                    {...input}
                    label="Confirm Password"
                    placeholder="Confirm new Password"
                    type="password"
                  />
                );
              }}
            />
            <Button
              className="bg-primary text-white font-bold hover:bg-secondary my-[20px] "
              type="submit"
            >
              Sign Up
            </Button>
            <div className="flex justify-center items-center text-[16px] mt-[6px]">
              <p>Already have an Account? &nbsp;</p>
              <Link href="/login" className="link">
                Sign In
              </Link>
            </div>
          </form>
        );
      }}
    />
  );
};

export default SignInForm;
