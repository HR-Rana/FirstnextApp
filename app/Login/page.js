"use client"

import Link from 'next/link'
import React from 'react'
import Input from '../Components/Elements/Input'
import logo from '@/app/Assist/Images/logo.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div className='login-area'>
      <div className="login-content-box">
        <Link href="/" class="flex mx-auto"> <Image src={logo} width={100} height={100} alt="logo" /> </Link>
        <h3>Login</h3>
        <br/>
        <p><Link href={"/Registration"} >New to Tong's Offer? <b>Registration</b> </Link></p>
        <form className='block my-5'>
         <span>
          <label htmlFor="num">Mobile Number</label>
           <Input placeholder={"Number"} id="num" />
         </span><br/><br/>
         <span>
          <label htmlFor="Password">Password</label>
           <Input placeholder={"Password"} id="Password" />
         </span>
         <div className="flex justify-between">
           <span className='flex'><input type="checkbox" id="rem" /> <label for="rem">Remember me</label></span>
           <span>
            <Link href="/ForgotPassword" > <p>Forgot password?</p> </Link>
           </span><br/>
         </div>
         <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}
