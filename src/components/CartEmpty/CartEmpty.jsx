import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <>
        <div className='w-full h-[80vh] container mx-auto px-4 py-4 shadow-lg rounded-md bg-[#f7f6f6] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" className='w-[300px]' alt="" />
                <h3 className='text-center text-2xl font-semibold mt-3'>Your Cart is Currently Empty</h3>
                <Link to='/'>
                <button className=' text-white bg-red-500 border-0 py-1 md:py-2 px-2 md:px-3 focus:outline-none hover:bg-red-600 rounded mt-4'>Go to Home</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default CartEmpty