"use client"

import React from 'react'
import Table from './Components/CommonTable/Table';
import { SoldOfferList } from './Components/TableData/Data';
import OfferSection from './Components/OfferSection/OfferSection';

  
export default function page() {

    const heading = ['প্যাকেজসমূহ',	'স্টাটাস',	"ক্রয় হয়েছে",	'রেগুলার দাম',	'মোবাইল নাম্বার'];
    

  return (
    <div className='Homepage page'>
      <section className="banner-section">
        <h2>ঈদুল ফিতরের শুভেচ্ছা </h2>
      </section>
       <section className='offer-section'>
        <OfferSection />
       </section>
       
       <section>
          <div className="recenter-offer-selling-list">
            <div className="selling-table">
              <h3>সাম্প্রতিক বিক্রি</h3>
                <Table thead={heading} tbody={SoldOfferList} />
            </div>
       </div>
       </section>
    </div>
  )
}


