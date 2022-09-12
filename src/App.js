import {useState,Fragment,useEffect} from "react"
import { Link, Route, Routes } from 'react-router-dom';
import Pen from "./Pages/Pen"
import PenList from "./Pages/PenList"
import Cart from "./Pages/Cart"
import CheckOut from "./Pages/CheckOut"
import { Dialog, Popover, Tab, Transition ,Menu} from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function App() {
  const [open, setOpen] = useState(false)
  const [counter, setCounter] = useState(()=>JSON.parse(localStorage.getItem("Order"))||[]);


  useEffect(() => {
      setCounter(JSON.parse(localStorage.getItem("Order")))
  }, [counter])
  
 
  const navigation = {
    pages: [
      { name: 'Home', href: '/',active:false },
      { name: 'Pen', href: '/Pen',active:true },
      { name: 'Books', href: '#',active:false },
      { name: 'Architecture', href: '#',active:false },
      { name: 'Decorations', href: '#',active:false },
      { name: 'Toys', href: '#',active:false },
    ],
  }

  
  
  return (
      <>
      <div className="bg-white w-full text-md  shadow-md font-medium ">
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
                        <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                          {page.name}
                        </a>
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
  
                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.href}
                        className={`flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 active:text-blue-600 ${page.active&&"text-lg text-blue-600"}`}
                        
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </Popover.Group>
  
                <div className="ml-auto flex items-center"> 
                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link to="/Cart" className="group -m-2 flex items-center p-2">
                     
                      <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true">
                          <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{counter.length}</span>
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
        <Route path="/Cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut/>}/>
         <Route path='/Pen'>
           <Route index element={<PenList/>} />
           <Route path=":id" element={<Pen/>} />
         </Route>
     </Routes>
    </>
  );
}

export default App;
/*
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
    </nav>*/