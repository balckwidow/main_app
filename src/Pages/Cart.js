import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Order")))
},[])
 console.log(data)
  return (
    <div>
       <div className='mt-1 bg-white'>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>
           <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      { 
        data.map((val,index) => {
        
        return(
                
          <div className="relative group  w-fit h-fit" key={index}>
            <div className='absolute right-0 -top-6'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

            </div>
                   <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                      <img src={val.image} alt={val.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                   </div>
                  
                   <div className='mt-4 flex items-center flex-col w-full'>
                     <h3 className='font-medium text-lg'>
                       {val.name}
                     </h3>
                     <p className="text-sm  text-gray-900">LBP {val.price}</p>
                   </div>
                   <div className='flex justify-center items center w-full mt-2 '>
                            <div className={`h-6 w-6 ${val.color === "black" ?
                            "bg-slate-900":val.color==="red"?"bg-red-700":
                            val.color==="blue"?"bg-blue-700":
                            val.color==="green"?"bg-green-700":"bg-white"} border-2 ${val.color==="black"?
                            "border-black":val.color==="red"?"border-red-900":
                            val.color==="blue"?"border-blue-900":
                             val.color === "green" ? "border-green-900" : "border-white"} m-2 rounded-full`}>
                  
                            </div>
                   </div>
                 </div>
              
                 )
        })}
        </div>
        </div>
    </div>
  </div>
  )
}

export default Cart