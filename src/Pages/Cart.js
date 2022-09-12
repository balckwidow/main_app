import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState(() =>  JSON.parse(localStorage.getItem("Order")) || [] );
  let total = 0;
 
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem("Order", JSON.stringify(data))
  },[data])
  const removeItem = (e) => {
    let id = e.target.id;
    let v = data[id].name+data[id].color;
    setData((prev)=>prev.filter(val=>val.name+val.color!==v))
  }
 const handleCheckout=()=>{
  navigate("/checkout")
 }
  return (
   data&&
    <div className='mx-2 lg:mx-0 lg:w-full'>
       <div className='mt-1 bg-white lg:w-full'>
        <div className="py-4 px-4 sm:py-24 sm:px-6  lg:flex lg:flex-col  lg:items-center lg:px-8 lg:w-full  ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-700 lg:text-center lg:text-4xlxl ">Shopping Cart</h2>
          {data.length===0&&<p className='mt-6 text-md text-gray-500 font-bold lg:text-2xl '>No Items Found</p>}
           <div className="mt-6 grid grid-cols-1 gap-x-6 self-center max-w-3xl lg:w-full">
      { data&&
        data.map((val,index) => {
          total += (parseInt(val.price)*parseInt(val.amount));
        return(
          <div className='border-b w-full py-4 flex justify-between ' key={index}>   
            
            <div className="group h-fit flex gap-4" >
              
              <div className='min-h-min overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-0 '>
                      <img src={val.image} alt={val.name} className="h-40 object-fit object-center lg:h-60" />
                   </div>
                   <div className='flex flex-col w-fit gap-1'>
                     <h3 className=' text-sm font-semibold text-gray-800 md:text-md lg:text-lg'>
                       {val.name}
                     </h3>
                <p className='text-sm font-medium text-gray-500 md:text-md lg:text-lg'>{val.color}</p>
                <p className='text-sm font-medium text-gray-500 md:text-md lg:text-lg'>Qantity:{val.amount}</p>
              </div>
              
            </div>
            <div className='flex flex-col justify-between items-center'>
                <p className='text-sm font-medium text-gray-600 md:text-md lg:text-lg'>LBP {val.price}</p>
                <button className='text-blue-700 text-sm font-medium cursor-pointer md:text-md lg:text-lg' id={index} onClick={removeItem}>Remove</button>
              </div>
        </div>
                 )
               } )}
          </div>
          <div className='mx-auto block w-full max-w-3xl'>
            <div className='mt-4 flex items-center justify-between font-bold text-md text-gray-700 md:text-md lg:text-lg '>
              <p>Subtotal</p>
              <p>LBP {total}</p>
            </div>
            <p className='mt-4 text-gray-500'>Shipping will be calculated at checkout.</p>
          </div>
          <button className='mt-6 py-4 bg-blue-600 text-white font-medium w-full max-w-3xl rounded-md md:text-md lg:text-lg' onClick={handleCheckout}>Checkout</button>
        </div>
    </div>
  </div>
  )
}

export default Cart