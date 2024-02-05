"use client"

import Link from 'next/link'
import React from 'react'
import logo from '@/app/Assist/Images/logo.jpg'
import Image from 'next/image'
import { FaCircleUser } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div className='navbar-area flex justify-between items-center'>
        <div className='brand-logo w-[20%]'>
            <Link href={'/'} >
                <Image src={logo} alt={"Brand-logo"} width={100}></Image>
            </Link>
        </div>
        <div className='w-[50%]'>
            <nav>
                <ul className='flex justify-between'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/Login"}>Login</Link></li>
                    <li><Link href={"/Registration"}>Registration</Link></li>
                </ul>
            </nav>
        </div>
        <div className="user-profile">
            <ul className={"flex gap-[20px] text-right justify-between items-center"}>
                <li>
                    <h6>Blance</h6>
                    <p>260 Tk</p>
                </li>
                <li>
                    <h6>Rahid</h6>
                    <p>0135460455</p>
                </li>
                <li className="text-3xl">
                    <FaCircleUser />
                </li>
            </ul>
        </div>
    </div>
  )
}
