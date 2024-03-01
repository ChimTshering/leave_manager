"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback } from 'react'

export default function NavList() {
  const path = usePathname()
  const activePathClass=useCallback((route:string)=>{
    console.log(path, route);
    if(path.startsWith(route)){
      return 'border-opacity-100  text-primary'
    }
    return '';
  },[path])
  return (
    <nav className="hidden lg:block">
      <ul className="flex mx-[12px] text-[20px]   text-black">
        <li
          className={`px-[12px] border-b-[2px] border-primary border-opacity-0 hover:border-opacity-100 hover:text-primary ${activePathClass("/")} `}
        >
          <Link href="/">Dashboard</Link>
        </li>
        <li
          className={`px-[12px] border-b-[2px] border-primary border-opacity-0 hover:border-opacity-100 hover:text-primary ${activePathClass("/history")} `}
        >
          <Link href="/">History</Link>
        </li>
        <li
          className={`px-[12px] border-b-[2px] border-primary border-opacity-0 hover:border-opacity-100 hover:text-primary ${activePathClass("/policy")} `}
        >
          <Link href="/">Policy</Link>
        </li>
      </ul>
    </nav>
  );
}
