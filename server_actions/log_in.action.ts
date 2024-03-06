"use server"

import { formDataToJson } from "@/utils/formData_to_Json";
import { redirect } from "next/navigation";

export const logIn = async(value:FormData) =>{
  console.log("log in submit", formDataToJson(value));
  redirect('/')
}
