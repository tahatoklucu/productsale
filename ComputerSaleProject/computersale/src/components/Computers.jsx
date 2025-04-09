import React from 'react'
import { Data } from '../helpers/Data';
import ComputerItem from './ComputerItem';
import '../styles/Computers.css';

function Computers({setBasketCount}) {
  return (
    <div className='computers'>
        <h1 className='computerTitle'>Our Computers for Sale</h1>
        <div className='computerList'>
            {Data.map((computerItem, key) => {
                return (
                    <ComputerItem 
                        key = {key}
                        image = {computerItem.image}
                        name = {computerItem.name}
                        content = {computerItem.content}
                        price = {computerItem.price}
                        onAddToCart = {() => setBasketCount(prev => prev + 1)}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Computers