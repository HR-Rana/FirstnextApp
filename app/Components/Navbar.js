"use client"

import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar-area flex justify-between items-center'>
        <div className='brand-logo w-[20]'>
            <Link href={"/"} >
                {/* <Image src={""} alt={"Brand-logo"}></Image> */}
                Recharge app
            </Link>
        </div>
        <div className='w-[50%]'>
            <nav>
                <ul className='flex justify-between'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/login"}>Login</Link></li>
                    <li><Link href={"/registration"}>Registration</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
