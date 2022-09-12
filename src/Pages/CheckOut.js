import React from 'react'

const CheckOut = () => {
  return (
    <div className=' h-screen w-full'>
      <form className='mx-4'>
        <div className='border-b-2 py-8'>
          <p className='font-bold text-lg text-gray-800'>Contact Information</p>
          <div className='mt-5 grid gap-y-3'>
             <label htmlFor='Mail' className='font-semibold text-md text-gray-500'>Email address</label>
             <input type="text" name="Mail" id="Mail" className='rounded-md border-gray-300'></input>
          </div>
        </div>
        <div className='py-8 grid grid-cols-1 gap-y-3'>
          <p className='font-bold text-lg text-gray-800'>Shipping Information</p>
          <label htmlFor='fname' className='font-semibold text-md text-gray-500'>First name</label>
          <input type="text" name="fname" id="fname" className='rounded-md border-gray-300'></input>
          <label htmlFor='last_name' className='font-semibold text-md text-gray-500'>Last name</label>
          <input type="text" name="last_name" id="last_name" className='rounded-md border-gray-300'></input>
          <label htmlFor='Address' className='font-semibold text-md text-gray-500'>Address</label>
          <input type="text" name="Address" id="Address" className='rounded-md border-gray-300'></input>
          <label htmlFor='appartment' className='font-semibold text-md text-gray-500'>Appartment</label>
          <input type="text" name="appartment" id="appartment" className='rounded-md border-gray-300'></input>
          <label htmlFor='city' className='font-semibold text-md text-gray-500'>City</label>
          <input type="text" name="city" id="city" className='rounded-md border-gray-300'></input>
          <label htmlFor='street' className='font-semibold text-md text-gray-500'>Street</label>
          <input type="text" name="street" id="street" className='rounded-md border-gray-300'></input>
          <label htmlFor='phone'  className='font-semibold text-md text-gray-500'>Phone</label>
          <input type="text" name="phone" id="phone" className='rounded-md border-gray-300'></input>
        </div>
        <div className='py-8 border-t-2'>
          <p className='font-bold text-lg text-gray-800'>Order summary</p>
          <div className='mt-4 flex items-center justify-between font-semibold text-md text-gray-500 md:text-md lg:text-lg '>
              <p>Subtotal</p>
              <p>LBP 80000</p>
          </div>
          <div className='mt-4 flex items-center justify-between font-semibold text-md text-gray-500 md:text-md lg:text-lg '>
              <p>Delivery</p>
              <p>LBP 80000</p>
          </div>
          <div className='mt-4 flex items-center justify-between font-semibold text-md text-gray-500 md:text-md lg:text-lg '>
              <p>Total</p>
              <p>LBP 160000</p>
            </div>
          <button type="submit" className='mt-6 py-4 bg-blue-600 text-white font-medium w-full max-w-3xl rounded-md md:text-md lg:text-lg'>Confirm order</button>
        </div>
      </form>
    </div>
  )
}

export default CheckOut