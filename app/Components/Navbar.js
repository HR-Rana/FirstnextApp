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
                    <li className="text-3xl">
                    <FaCircleUser />
                </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
