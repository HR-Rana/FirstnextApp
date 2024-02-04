"use client"

import Link from 'next/link'
import React from 'react'
import logo from '@/app/Assist/Images/logo.jpg'
import Image from 'next/image'


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
            <ul>
                <li>
                    <h6>Rahid</h6>
                    <p>0135460455</p>
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
  )
}
