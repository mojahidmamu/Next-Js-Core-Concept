"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"))
  if(!pathname.includes("dashboard"))
  {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between w-1/2 text-red-400">
            <Link href='/'> <li>Home </li></Link>
            <Link href='/services'> <li>Services </li></Link>
            <Link href='/about'> <li>About </li></Link>
            <Link href='/user-dashboard'> <li>Dashboard </li></Link>
            <Link href='/login'> <li>Login </li></Link>
            <Link href='/register'> <li>Register </li></Link>
             
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>
  }
 
}
