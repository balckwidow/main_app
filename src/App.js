import {useState,Fragment} from "react"
import { Link, Route, Routes } from 'react-router-dom';
import Pen from "./Pages/Pen"
import PenList from "./Pages/PenList"
import { Menu, Transition } from '@headlessui/react'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function App() {
  const [open,setOpen]=useState(false)
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
          <div>
          <Link to="/Pen" className={`mt-4 sm:mt-0 sm:block  ${open?"block":"hidden"}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </Link>
          </div>
          
          <div className="absolute right-4 top-4 sm:hidden" onClick={() => setOpen(!open)}>
            <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </div>
            <span className="absolute -top-3 -right-4 h-5 w-5 text-center bg-slate-600 rounded-full shadow-md text-white text-sm ">2</span>
        </div>
     </div>
    </nav>
      

     <Routes>
      <Route path='/Pen'>
         <Route index element={<PenList/>} />
         <Route path=":id" element={<Pen/>} />
      </Route>
     </Routes>
    </>
  );
}

export default App;
