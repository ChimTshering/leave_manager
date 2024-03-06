import Messages from "@/components/messages/messages";
import { PieChart } from "@/components/pie_chart/pie_chart";
import { Button } from "@/components/shared/button";
import { PlusIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-[20px]">
      <section className="hidden  lg:flex justify-center items-center w-full pt-[16px] border-b-[1px] border-black/5 px-[16px] lg:px-[60px]">
        <div className="w-1/2 font-bold text-black/85 text-center text-[26px]">
          <h1>
            Welcome to Leave<span className="text-primary">Hub</span>.
          </h1>
          <h1 className="hidden lg:block">
            Your leave management application.
          </h1>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <div className="text-center text-black/90">

          <div className="h-[100px] lg:h-[150px] w-[100px] lg:w-[150px] relative rounded-full overflow-hidden shadow-md">
            <Image src="/images/avatar.png" alt="user profile" priority fill />
          </div>
          <p>User Name</p>
          </div>
        </div>
      </section>
      <section className="pt-[30px] border-b-[1px] border-black/5 px-[16px] lg:px-[60px]">
        <div className="flex justify-between ">
          <h1 className="font-bold text-black/85 text-center text-[26px]">
            Overview
          </h1>
          <div className="hidden lg:flex text-black/90 text-[18px] space-x-[16px]">
            <div className="flex justify-between items-center space-x-[4px]">
              <div className="w-[20px] h-[14px] bg-tertiary rounded-sm"></div>
              <p>Used</p>
            </div>
            <div className="flex justify-between items-center space-x-[4px]">
              <div className="w-[20px] h-[14px] bg-primary rounded-sm"></div>
              <p>Remaining</p>
            </div>
          </div>
          <Link href="">
            <Button className="bg-primary text-white font-bold hover:bg-primary/70">
              <PlusIcon height={18} className="text-white" /> Add
            </Button>
          </Link>
        </div>
        <div className="flex w-full justify-evenly relative flex-col lg:flex-row ">
          <PieChart />
          <PieChart />
          <PieChart />
        </div>
      </section>
      <section className="pt-[30px] px-[16px] lg:px-[60px]">
        <h2 className="font-bold text-black/85 text-[26px]">Draft Messages</h2>
        <Messages/>
      </section>
    </div>
  );
}
