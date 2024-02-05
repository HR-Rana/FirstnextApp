"use client"

import Link from 'next/link'
import React from 'react'
import Input from '../Components/Elements/Input'
import Image from 'next/image'


export default function page() {
  return (
   <div className='login-area signup-area'>
        {/* <Image src={""} alt="logo" /> */}
      <div className="login-content-box">
        <h3>Registration
        </h3>
        <br/>
        <p><Link href={"Login"} >New to Tong's Offer?</Link></p>
        <form className='block my-5'>
         <span>
          <label htmlFor='name'>Full Name</label>
           <Input type={'text'} placeholder={"Full Name"} id='name' />
         </span><br/>
         <span>
           <label htmlFor='num'>Mobile Number</label>
           <Input type={'number'} placeholder={"Number"} id={'num'}/>
         </span><br/>
         <span>
         <label htmlFor='Password'>Password</label>
           <Input type={"password"} placeholder={"Password"} id={"Passowrd"} />
         </span>
         <span>
           <Input type={"submit"} value={"Registration"} />
         </span>
        </form>
      </div>
    </div>
  )
}
