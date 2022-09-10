import {useState,useEffect} from 'react'
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore";
import {Link} from "react-router-dom"

const PenList = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
  
      const getData=async()=>{
        try{
          const querySnapshot = await getDocs(collection(db, "Pen"));
          querySnapshot.forEach((doc) => {
            setData((prev)=>([...prev,doc.data()]))
          });  
        }catch(err)
          {
            console.log(err)
          }      
      }
    getData() 

  },[])
  console.log(data)
  return (
    <div className='mt-1 bg-white'>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pen</h2>
           <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data &&
              data.map((val,index)=> {
                return(
                <Link to={"/Pen/"+val.name} key={index}>
                <div  className="group relative w-fit h-fit">
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
                      { 
                          val.color.map(v => {
                            
                            return (<div className={`h-6 w-6 ${v === "black" ?
                            "bg-slate-900":v==="red"?"bg-red-700":
                             v==="blue"?"bg-blue-700":
                             v==="green"?"bg-green-700":"bg-white"} border-2 ${v==="black"?
                            "border-black":v==="red"?"border-red-900":
                             v==="blue"?"border-blue-900":
                                    v === "green" ? "border-green-900" : "border-white"} m-2 rounded-full`} key={val.name+"_"+v}></div>)
                            }
                            
                          ) 
                        
                        }
                        
                   </div>
                 </div>
                 </Link>
                 )
            })   
              }
              
            
           </div>
        </div>
    </div>
  )
}

export default PenList