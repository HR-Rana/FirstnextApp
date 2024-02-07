"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/app/Assist/Images/logo.jpg'
import Image from 'next/image'
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";


export default function Navbar() {
    const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className='navbar-area flex justify-between items-center px-5'>
        <div className='brand-logo w-[20%]'>
            <Link href={'/'} >
                <Image src={logo} alt={"Brand-logo"} width={100}></Image>
            </Link>
        </div>
        <div className='nav-items'>
            <nav>
                <ul className='flex justify-between'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/Login"}>Login</Link></li>
                    <li><Link href={"/Registration"}>Registration</Link></li>
                    <li  className="text-3xl cursor-pointer"
                        onClick={(e)=>{setOpenProfile(!openProfile)}}
                    >
                    <FaCircleUser />
                   {
                    openProfile ?  <ul>
                        <li><Link href="/Dashboard">Profile</Link></li>
                        <li>Balance: <span>250Tk</span></li>
                        <li><span><IoLogOut /></span> Logout</li>
                    </ul> : null
                   }
                </li>
                </ul>
            </nav>
            <div className="bars" onClick={(e)=>{setOpenProfile(!openProfile)}}>
                {
                    openProfile ? <RxCross1 /> :  <FaBars />
                }
            </div>
        </div>
    </div>
  )
}
