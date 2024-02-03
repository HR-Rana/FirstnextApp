import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Table from '../../CommonTable/Table';


export default function SimOffer({}) {
  return (
    <div>
        <div className=''>
             <Tabs>
                <TabList>
                <Tab>Data Packages</Tab>
                <Tab>Minutes Packages</Tab>
                <Tab>Bundle Packages</Tab>
                </TabList>

                <TabPanel>
                  <Table header={theader} tbody={tbody} />Data
                </TabPanel>
                <TabPanel>
                  <Table header={theader} tbody={tbody} />minutes
                </TabPanel>
                <TabPanel>
                  <Table header={theader} tbody={tbody} />bundles
                </TabPanel>
            </Tabs>
       </div>
    </div>
  )
}
