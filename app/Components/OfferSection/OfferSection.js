import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function OfferSection() {
  return (
    <div>
       <h2>আকর্ষণীয় অফারসমূহ :-</h2>

       <div className=''>
             <Tabs>
                <TabList>
                <Tab>Airtle</Tab>
                <Tab>Robi</Tab>
                <Tab>BanglaLink</Tab>
                <Tab>Grameen</Tab>
                <Tab>Teletalk</Tab>
                </TabList>

                <TabPanel>
                <h2>Data Packages</h2>
                </TabPanel>
                <TabPanel>
                <h2>Data and Talk time package</h2>
                </TabPanel>
                <TabPanel>
                <h2>Talk time package</h2>
                </TabPanel>
                <TabPanel>
                <h2>Data and Talk time package</h2>
                </TabPanel>
                <TabPanel>
                <h2>Talk time package</h2>
                </TabPanel>
            </Tabs>
       </div>
    </div>
  )
}
