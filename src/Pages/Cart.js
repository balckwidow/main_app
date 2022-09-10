import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
const Cart = () => {
  const [data, setData] = useState([]);
  let total = 0;
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Order")))
},[])

  const removeItem = (e) => {
    let id = e.target.id;
    let list = data;
    list.splice(id,1);
    console.log(list)
    localStorage.setItem("Order", JSON.stringify(list))
    setData(list)
  }
 
  return (
    <div className='mx-2 w-full'>
       <div className='mt-1 bg-white w-full'>
        <div className=" max-w-2xl py-16 px-4 w-full sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
           <h2 className="text-2xl font-bold tracking-tight text-gray-700  ">Shopping Cart</h2>
           <div className="mt-6 grid grid-cols-1 gap-y- gap-x-6 w-full">
      { 
        data.map((val,index) => {
          total += (parseInt(val.price)*parseInt(val.amount));
        return(
          <div className='border-b w-full py-4 flex justify-between ' key={index}>   
            
            <div className="group h-fit flex gap-4" >
              
              <div className='min-h-min overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80'>
                      <img src={val.image} alt={val.name} className="h-40 object-cover object-center" />
                   </div>
                   <div className='flex flex-col w-fit gap-1'>
                     <h3 className=' text-sm font-semibold text-gray-800'>
                       {val.name}
                     </h3>
                <p className='text-sm font-medium text-gray-500'>{val.color}</p>
                <p className='text-sm font-medium text-gray-500'>Qantity:{val.amount}</p>
              </div>
              
            </div>
            <div className='flex flex-col justify-between items-center'>
                <p className='text-sm font-medium text-gray-600'>LBP {val.price}</p>
                <button className='text-blue-700 text-sm font-medium cursor-pointer' id={index} onClick={removeItem}>Remove</button>
              </div>
        </div>
                 )
               } )}
          </div>
          <div className='mx-auto block w-full'>
            <div className='mt-4 flex items-center justify-between font-bold text-md text-gray-700'>
              <p>Subtotal</p>
              <p>LBP {total}</p>
            </div>
            <p className='text-gray-500'>Shipping will be calculated at checkout.</p>
          </div>
          <button className='mt-6 py-4 bg-blue-600 text-white font-medium w-full rounded-md'>Checkout</button>
        </div>
    </div>
  </div>
  )
}

export default Cart