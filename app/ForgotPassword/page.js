import React from 'react'
import Input from '../Components/Elements/Input'

export default function ResetPassword() {
  return (
    <div className="forgot-password">

        <form>
            <span>
                <label htmlFor="num">Account Mobile No</label><br/>
                <Input type={"number"} placeholder={'Mobile Number'} id={'num'}/><br/>
                <Input type={"Submit"} value={"Submit"} />
            </span>
        </form>
    </div>
  )
}
