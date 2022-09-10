import {useState,Fragment,useEffect} from "react"
import { Link, Route, Routes } from 'react-router-dom';
import Pen from "./Pages/Pen"
import PenList from "./Pages/PenList"
import { Menu, Transition } from '@headlessui/react'
import Cart from "./Pages/Cart"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function App() {
  const [open, setOpen] = useState(false)
  const [counter, setCounter] = useState(0);
  
  let orders=JSON.parse(localStorage.getItem("Order")).length
  useEffect(() => {
    
    const countOrders = () => {
      
      
    if (localStorage.getItem("Order") != null) {
      setCounter(orders ) 
     }
  }
    countOrders();
  },[orders])
  
  return (
    <>
     <nav className={`relative flex bg-white p-3 w-full text-md  flex-col  sm:flex-row sm:items-center sm:justify-between shadow-md font-medium lg:p-6`}>
      <p> <Link to = "/" > Nejme </Link></p>
      <div className="flex flex-col sm:items-center sm:flex-row mt-4 sm:justify-evenly sm:mt-0">
          <ul className={`${open?"block":"hidden"} sm:flex flex-col sm:flex-row sm:items-center sm:mr-44 text-gray-700  `}>
          <li className="mr-8">
            <Link to="/">Home</Link>
          </li>
          <li className="mt-4 sm:mt-0">
              <Menu as="div" className="relative inline-block text-left">
              <div>
        <Menu.Button className="inline-flex w-full justify-center items-center bg-white  py-2  font-medium text-gray-700  focus:outline-none  ">
          Categories
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-mr-1 ml-2 h-5 w-5" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 sm:right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Pen"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pen
                </Link>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
              </Menu>
          </li>
          </ul>
          <div className="relative">
            <Link to="/Cart" className={`mt-4 sm:mt-0 sm:block  ${open ? "block" : "hidden"}`}>
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

            </Link>

          </div>
          
          <div className="absolute right-4 top-4 sm:hidden" onClick={() => setOpen(!open)}>
            <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </div>
          
        </div>
     </div>
    </nav>
      

      <Routes>
        <Route path="/Cart" element={<Cart/>} />
      <Route path='/Pen'>
         <Route index element={<PenList/>} />
         <Route path=":id" element={<Pen/>} />
      </Route>
     </Routes>
    </>
  );
}

export default App;
