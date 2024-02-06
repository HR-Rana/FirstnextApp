
import React from 'react'

export default function page() {
  return (
    <div className='order-placement-page'>
      <div className="order-confirmation">
      <div className="offer-title">
        <h3>Package name:{'title'} From {'author'}</h3>
        <h4>Provided By: {'author'}</h4>
      </div>


        <form>
              <h4>Type your number To receive the Offer</h4>
              <br />
            <input type="number" placeholder="Type the Number" /><br/>
            <input type="submit" value="Confirm Order" />
        </form>
      </div>
    </div>
  )
}
