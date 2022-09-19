import {Route, Routes } from 'react-router-dom';
import Pen from "./Pages/Pen"
import PenList from "./Pages/PenList"
import Cart from "./Pages/Cart"
import CheckOut from "./Pages/CheckOut"
import { useState, Fragment} from "react"
import { Dialog, Popover, Transition} from '@headlessui/react'
import { Link,NavLink} from 'react-router-dom';



function App() {
  if(sessionStorage.getItem("Order")===null)
  sessionStorage.setItem("Order", JSON.stringify([]))
 
  
  const [open, setOpen] = useState(false)
     
    const navigation = {
      pages: [
        { name: 'Home', href: '/' },
        { name: 'Pen', href: '/pen' },
        { name: 'Books', href: '/book' },
        { name: 'Architecture', href: '/architecture'},
        { name: 'Decorations', href: '/decorations'},
        { name: 'Toys', href: '/toys'},
      ],
    }

  const [count,setCount]=useState(()=>JSON.parse(sessionStorage.getItem("Order")).length||0)
  

//Pen


  return (
    <>
      <div className="bg-white w-full text-md  shadow-md font-medium z-20 relative top-0 ">
    {/* Mobile menu */}
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>

              {/* Links */}
             <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <NavLink
                      style={({ isActive }) => {
                    return {
                      fontSize:isActive ? "1.125rem":" ",
                      lineHeight:isActive ?"1.75rem": " ",
                      color: isActive ? "rgb(37,99,235)" : "",
              };
            }}
                      to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                      {page.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>

    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div>
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
            {/* Logo */}
            <div className="mr-28 lg:ml-0">
             <Link to="/">
                Nejme
              </Link>
            </div>
            {/* PC */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.pages.map((page) => (
                  <NavLink
                    style={({ isActive }) => {
                    return {
                      fontSize:isActive ? "1.125rem":" ",
                      lineHeight:isActive ?"1.75rem": " ",
                      color: isActive ? "rgb(37,99,235)" : "",
              };
            }}
                    key={page.name}
                    to={page.href}
                    className={`flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 active:text-blue-600 `}
                    
                  >
                    {page.name}
                  </NavLink>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center"> 
              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Link to="/cart" className="group -m-2 flex items-center p-2">
                 
                  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true">
                      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{count}</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
      </div>
      
      <Routes>
      <Route path="/cart" element={<Cart setCount={setCount}/>} />
        <Route path="/checkout" element={<CheckOut/>}/>
         <Route path='/pen' >
           <Route index element={<PenList/>} />
          <Route path=":id" element={<Pen  setCount={setCount}/>} />
         </Route>
     </Routes>
    </>
  );
}

export default App;
