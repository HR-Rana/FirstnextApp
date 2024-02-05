import Link from 'next/link';
import React from 'react'
import Button from '../Elements/Button';
import { FaCheckDouble } from "react-icons/fa";

export default function  Table({thead, tbody, offer}) {


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
                const {name,types,discount, todayPrice,regularPrice,priod} = items;
                    return(
                        <tr key="i">
                            <td>{name}</td>
                            <td>{discount}</td>
                            <td>{todayPrice}</td>
                            <td>{regularPrice}</td>
                            <td><Link href={'/'} ><Button btnName={"Buy"} /></Link></td>
                            <td>{priod}</td>
                        </tr>
                    )
                })
              
              : tbody.map((items, i)=>{
                const {name,status, brought,price,mobile} = items;
                    return(
                        <tr key={i}>
                            <td>{name}</td>
                            <td className='flex  items-center'> <FaCheckDouble /> {status}</td>
                            <td>{brought}</td>
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
