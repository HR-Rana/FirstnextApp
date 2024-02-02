import Link from 'next/link'
import React from 'react'
import Input from '../Components/Elements/Input'

export default function page() {
  return (
    <div className='login-area'>
      <div className="login-content-box">
        <h3>Login</h3>
        <br/>
        <p><Link href={"Login"} >New to Tong's Offer?</Link></p>
        <form className='block'>
         <span>
           <Input placeholder={"Email"} />
         </span><br/>
         <span>
           <Input placeholder={"password"}  />
         </span>
        </form>
      </div>
    </div>
  )
}
