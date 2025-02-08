"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
    const router = useRouter();
    const isLoggedIn = true;
    const handleNavigation = () => {
        if(isLoggedIn){
            router.push('/about/address')
        } else {
            router.push('/')
        }
    }
  return (
    <div>
      <Link href='/about/address'><li>Address Page</li></Link>
      <p className="text-4xl">About-Page</p>
      <button type="button" onClick={handleNavigation}>About Page</button>
    </div>
  );
}
