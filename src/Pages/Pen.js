import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebase"
const Pen = () => {
  const {id}=useParams();
  
const[data,setData]=useState({});
useEffect(()=>{
  
  const getData=async()=>{
    const docRef = doc(db, "Pen", "Pen_"+id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log("No such document!");
    }
    
  }
  getData()
 
  
},[])

console.log(data)

  return (
    <div className='p-auto my-9 '>
      <Link to="/Pen" className='ml-6  flex items-center space-x-2 mt-10 text-xl font-medium'><p>Pen /</p>
        <p className='text-gray-600'>{id}</p></Link>
      <form>
      <div className='flex flex-col text-center items-center justify-center lg:flex-row lg:space-x-40 lg:text-start lg:mt-[7%]'>
      <img src={data.image} alt={data.name} className=""/>
      <div>
        <p className='text-md lg:text-3xl font-bold mt-4 '>{data.name}</p>
        <p className='text-start min-w-sm max-w-md mt-6'>The Basic Tee 6-Pack allows you to fully express</p>
        <p className='text-xl text-gray-500 my-8'>Colors</p>
        <div className='flex items-center justify-center lg:justify-start'>
        { data.color&&
            data.color.map(v=>(
                <>
                <input type="radio" id={"id_" + data.name + "_" + v} value={v} className={`hidden ${v}`} />
                <label htmlFor={"id_" + data.name + "_" + v} type="radio" className={`cursor-pointer h-8 w-8 mr-4 mt-4 ${v === "black" ?
                "bg-slate-900" : v === "red" ? "bg-red-700" :
                  v === "blue" ? "bg-blue-700" :
                    v === "green" ? "bg-green-700" : "bg-white"} border-2 ${v === "black" ?
                      "border-black" : v === "red" ? "border-red-900" :
                        v === "blue" ? "border-blue-900" :
                          v === "green" ? "border-green-900" : "border-white"} m-2 rounded-full ${v}-checked:ring-4 ${v}-checked:ring-slate-600`}></label></>
                        ))   
                      }
        </div>
       <button className='bg-blue-700 rounded-md mt-9 text-white font-medium px-4 py-2 w-[340px]'>Add to bag</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default Pen

/* */