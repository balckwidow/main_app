import {useState,useEffect} from 'react'
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore";
import {Link} from "react-router-dom"




const PenList = () => {
  const [data,setData]=useState([]);
  
  useEffect(() => {
    if(localStorage.getItem("PenList")===null){
      console.log("a")
      const getData=async()=>{
        try{
          const querySnapshot = await getDocs(collection(db, "Pen"));
          let list = []
          querySnapshot.forEach((doc) => {
            list.push(doc.data())  
          });
          setData(list) 
          console.log(list)
          localStorage.setItem("PenList",JSON.stringify(list))

        }catch(err)
          {
            console.log(err)
          }      
      }
      getData()  
    }
    else {
      setData(JSON.parse(localStorage.getItem("PenList")))
    }


  }, [])



  return (
    <>
     { /*<Header counter={ JSON.parse(localStorage.getItem("Order")).length}/>*/}
    <div className='mt-1 bg-white w-full'>
        <div className="mx-4 ">
           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pen</h2>
        <div className="mt-6 grid grid-cols-2 w-full gap-y-4 justify-items-center
           lg:grid-cols-3 2xl:grid-cols-4">
            {data &&
              data.map((val,index)=> {
                return(
                <Link to={"/Pen/"+val.name} key={index}>
                <div  className="group  w-fit h-fit  p-3">
                   <div className='aspect-w-2 aspect-h-3 max-h-80 w-32  overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 sm:w-52 md:w-60 md:h-60 lg:w-72 lg:aspect-none lg:h-80'>
                      <img src={val.image} alt={val.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                   </div>
                  
                   <div className='mt-2 flex items-center flex-col w-full'>
                     <h3 className='font-medium text-sm sm:text-base lg:text-lg'>
                       {val.name}
                     </h3>
                     <p className="text-sm  text-gray-900 sm:text-base lg:text-lg">LBP {val.price}</p>
                   </div>
                   <div className='flex justify-center w-full mt-2 gap-2 sm:gap-4'>
                      { 
                          val.color.map(v => {
                            
                            return (<div className={`h-4 w-4 
                            ${v === "black" ? "bg-slate-900" : v === "red" ? "bg-red-700" : v === "blue" ? "bg-blue-700" : v === "green" ? "bg-green-700" : "bg-white"} 
                            border-2
                            ${v === "black" ? "border-black" : v === "red" ? "border-red-900" : v === "blue" ? "border-blue-900" : v === "green" ? "border-green-900" : "border-white"} 
                            rounded-full sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:w-7 xl:h-7`} key={val.name + "_" + v}></div>)
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
      </>
  )
}

export default PenList