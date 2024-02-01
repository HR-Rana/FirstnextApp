"use client"

import React from 'react'
import '@/app/Assist/Css/style.css'
import Table from './Components/CommonTable/Table';
import { SoldOfferList } from './Components/TableData/Data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

  
export default function page() {

    const heading = ['প্যাকেজসমূহ',	'স্টাটাস',	"ক্রয় হয়েছে",	'রেগুলার দাম',	'মোবাইল নাম্বার'];
    const offers = ['ডিসকাউন্ট',	'আজকের দাম', 'অফিসিয়াল দাম','ক্রয় করুন',	'মেয়াদ / যেসব এরিয়া পাবে'];

  return (
    <div className='Homepage'>
       <div className='Hero-title text-center '> 
           <h2 className="text-[48px]">
                Recharge your mobile from any operator just a click.
           </h2>
           <p className={'text-[24px]'}>Anytime, Anywhere.</p>
       </div>

       <section>
          <div className="recenter-offer-selling-list">
            <div className="selling-table">
                <Table thead={heading} tbody={SoldOfferList} />
            </div>
       </div>
       </section>

       <section className='offer-section'>
       
       </section>
    </div>
  )
}


