import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebase"
const Pen = () => {
  const {id}=useParams();
  
  const [data, setData] = useState();
  const [newData, setNewData] = useState()
  const [amount, setAmount] = useState(0);
  
useEffect(()=>{
  
  const getData=async()=>{
    const docRef = doc(db, "Pen", "Pen_"+id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
      setNewData(docSnap.data());
      
    } else {
      console.log("No such document!");
    }
    
  }
  getData()
 
  
},[])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("Order") == null) {
      let ord=[newData]
      localStorage.setItem("Order", JSON.stringify(ord))
    }
      
    else
    {
      let orders = JSON.parse(localStorage.getItem("Order"));
      orders.push (newData);
      localStorage.setItem("Order", JSON.stringify(orders))
      }
  }
  const handleChange = (e) => {
    let col = e.target.value;
    setNewData((prev) => ({ ...prev, "color": col }))
  }
  const encrement = (e) => {
    e.preventDefault()
    setAmount(() => amount + 1)
    setNewData((prev) => ({ ...prev, "amount":amount+1}))
  }
  const decrement = (e) => {
    e.preventDefault()
    amount >0 &&
      setAmount(() => amount - 1)
      setNewData((prev) => ({ ...prev, "amount":amount-1}))
  }

  

  return (
    data&&
    <div className='p-auto my-9 '>
      <Link to="/Pen" className='ml-6  flex items-center space-x-2 mt-10 text-xl font-medium'><p>Pen /</p>
        <p className='text-gray-600'>{id}</p></Link>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col text-center items-center mt-4 justify-center md:flex-row md:space-x-32 lg:space-x-40 md:text-start lg:mt-[7%]'>
      <img src={data.image} alt={data.name} className=""/>
      <div>
        <p className='text-md lg:text-3xl font-bold mt-4 '>{data.name}</p>
        <p className='text-start min-w-sm max-w-md mt-6'>The Basic Tee 6-Pack allows you to fully express</p>
        <p className='text-xl text-gray-500 my-8'>Colors</p>
        <div className='flex items-center justify-center lg:justify-start'>
        { data.color&&
            data.color.map(v=>(
                <div key={v+"_"+data.name}>
                <input type="radio" id={v+"_"+data.name} value={v} name="color" className={`hidden peer`} onChange={handleChange} />
                <label htmlFor={v + "_" + data.name} type="radio" className={`cursor-pointer h-8 w-8 mr-4 mt-4 ${v === "black" ?
                "bg-slate-900" : v === "red" ? "bg-red-700" :
                  v === "blue" ? "bg-blue-700" :
                    v === "green" ? "bg-green-700" : "bg-white"} border-2 ${v === "black" ?
                      "border-black" : v === "red" ? "border-red-900" :
                        v === "blue" ? "border-blue-900" :
                        v === "green" ? "border-green-900" : "border-white"} m-2 rounded-full  focus:ring  focus:${v === "black" ?
                "ring-slate-900" : v === "red" ? "ring-red-700" :
                  v === "blue" ? "ring-blue-700" :
                    v === "green" ? "ring-green-700" : "ring-white"} peer-checked:ring-2  peer-checked:ring-offset-2  ${v === "black" ?
                "peer-checked:ring-slate-900" : v === "red" ? "peer-checked:ring-red-700" :
                  v === "blue" ? "peer-checked:ring-blue-700" :
                        v === "green" ? "peer-checked:ring-green-700" : "peer-checked:ring-white"} `}>
                  
                    </label>
              </div>
                        ))   
                      }
            </div>
            <p className='text-gray-500 text-xl mt-4'>Quantity</p>
            <div className='flex items-center justify-evenly mt-5 text-lg font-medium'>
              <button onClick={decrement}  className="cursor-pointer">-</button>
                 <div>{amount}</div>
              <button onClick={encrement} className="cursor-pointer">+</button>
            </div>
       <button className='bg-blue-700 rounded-md mt-9 text-white font-medium px-4 py-2 w-[340px]' type="submit">Add to bag</button>
      </div>
        </div>
        
      </form>
    </div>
  )
}

export default Pen

/* */