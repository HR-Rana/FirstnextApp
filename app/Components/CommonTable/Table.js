import React from 'react'

export default function Table({thead, tbody, offer}) {


  return (
    <table  className='table'>
        <thead>
            <tr key="">
                {
                thead.map((itmes, i)=>{
                    return(
                        <th key={i}>{itmes}</th>
                    )
                })
            }
            </tr>
        </thead>
        <tbody>
            {
              offer ?  
              tbody.map((items, i)=>{
                const {packages,discount, today,official,Buy,priod} = items;
                    return(
                        <tr key="i">
                            <td>{packages}</td>
                            <td>{discount}</td>
                            <td>{today}</td>
                            <td>{official}</td>
                            <td>{Buy}</td>
                            <td>{priod}</td>
                        </tr>
                    )
                })
              
              : tbody.map((items, i)=>{
                const {packages,status, sold,price,mobile} = items;
                    return(
                        <tr key="i">
                            <td>{packages}</td>
                            <td>{status}</td>
                            <td>{sold}</td>
                            <td>{price}</td>
                            <td>{mobile}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}
