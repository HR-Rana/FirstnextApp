import React from 'react'
import Input from '../Components/Elements/Input'

export default function ResetPassword() {
  return (
    <div className="forgot-password login-area">
      <h3>Reset Your Password</h3><br/>   
        <form>
            <span>
                <label htmlFor="num">Account Mobile No</label><br/>
                <Input type={"number"} placeholder={'Mobile Number'} id={'num'}/><br/>
                <label htmlFor="pass">New Password</label><br/>
                <Input type={"password"} placeholder={'New Password'} id={'pass'}/><br/>
                <Input type={"Submit"} value={"Submit"} />
            </span>
        </form>
    </div>
  )
}
