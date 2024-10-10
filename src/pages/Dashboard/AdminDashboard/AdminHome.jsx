import { FaRegClock  } from "react-icons/fa"
import { HiShoppingBag } from "react-icons/hi2"
import { IoSettingsOutline } from "react-icons/io5"
import { SlBadge } from "react-icons/sl";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { ImCoinDollar } from "react-icons/im";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import SessionsByCountry from "./SessionsByCountry";
import RecentOrders from "./RecentOrders";


const AdminHome = () => {
  return (
    <section>
          {/* admin header */}
          
          <div className="flex items-center justify-between gap-[400px] mx-auto py-5">
              <h1 className="pl-4">Welcome</h1>
              
              <div className="flex items-center justify-between gap-2">
   
                          
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
                  </button>

     <button className="btn btn-ghost btn-circle">
                <IoSettingsOutline className="text-xl text-black font-bold"/>
                  </button>
                  
     <button className="btn btn-ghost btn-circle">
                <FaRegClock className="text-xl text-black font-bold"/>
                          </button>
                          
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
                          </div>
                          
      <button className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                          </button>
                          




              </div>
          </div>

          {/* admin header */}
          
          <div className="grid grid-cols-8 gap-5 py-10">
              
              <div className="col-span-4 ">
                  <h2 className="bg-[#f9bea6] p-2 ml-5 rounded-md mb-5 text-sm">
                  We regret to inform you that, our server is experiencing few technical difficulties.

                  </h2>
                 
                  <div className="grid grid-cols-2 gap-5 pl-5">

                  <div className="bg-white  rounded-lg drop-shadow-md">
                          
                 <div className="flex items-center justify-between gap-5 p-4">
                                     <div className="bg-orange-100 p-3 rounded-full">
                                            <HiShoppingBag className="w-6 h-6 text-orange-500" />
                                    </div>
                              
                                     <div>
                                            <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
                                            <p className="text-2xl font-semibold mt-1">13,647</p>
                                     </div>
                              
                          </div>
                          
                          <div className=" bg-gray-100 p-1 mt-4 ">
                              <div>
                                  <h2 className="flex items-center gap-2 text-sm">
                                      <span className="text-green-500 flex items-center gap-1 text-sm"><IoMdArrowDropup className="text-3xl" /> 2.3%</span> Last Week
                                    </h2>
                              </div>
                     </div>
                      </div>

                      <div className="bg-white rounded-lg drop-shadow-md">
                          
                          <div className="flex items-center justify-between gap-5 p-4">
                                              <div className="bg-orange-100 p-3 rounded-full">
                                                     <SlBadge className="w-6 h-6 text-orange-500 font-extrabold" />
                                             </div>
                                       
                                              <div>
                                                     <h3 className="text-sm font-medium text-gray-500">New Leads</h3>
                                                     <p className="text-2xl font-semibold mt-1">9526</p>
                                              </div>
                                       
                          </div>
                          
                          <div className=" bg-gray-100 p-1 mt-4 ">
                              <div>
                                  <h2 className="flex items-center gap-2 text-sm">
                                      <span className="text-green-500 flex items-center gap-1 text-sm"><IoMdArrowDropup className="text-3xl" /> 8.3%</span> Last Month
                                    </h2>
                              </div>
                     </div>
                                   
                              
                               </div>

                               <div className="bg-white rounded-lg drop-shadow-md ">
                          
                          <div className="flex items-center justify-between gap-5 p-4 ">
                                              <div className="bg-orange-100 p-3 rounded-full">
                                                     <PiSuitcaseSimpleFill
                                                     className="w-6 h-6 text-orange-500" />
                                             </div>
                                       
                                              <div>
                                                     <h3 className="text-sm font-medium text-gray-500">Total Deals</h3>
                                                     <p className="text-2xl font-semibold mt-1">947</p>
                                              </div>
                                       
                                   </div>
                                   
                                   <div className=" bg-gray-100 p-1 mt-4 ">
                              <div>
                                  <h2 className="flex items-center gap-2 text-sm">
                                      <span className="text-red-500 flex items-center gap-1 text-sm"><IoMdArrowDropdown className="text-3xl" /> 0.3%</span> Last Month
                                    </h2>
                              </div>
                     </div>
                              
                               </div>

                               <div className="bg-white  rounded-lg drop-shadow-md ">
                          
                          <div className="flex items-center justify-between gap-5 p-4">
                                              <div className="bg-orange-100 p-3 rounded-full">
                                                     <ImCoinDollar className="w-6 h-6 text-orange-500" />
                                             </div>
                                       
                                              <div>
                                                     <h3 className="text-sm font-medium text-gray-500">Booked Revenue</h3>
                                                     <p className="text-2xl font-semibold mt-1">$123.6k</p>
                                              </div>
                                       
                          </div>
                          
                          <div className=" bg-gray-100 p-1 mt-4 ">
                              <div>
                                  <h2 className="flex items-center gap-2 text-sm">
                                      <span className="text-red-500 flex items-center gap-1 text-sm"><IoMdArrowDropdown className="text-3xl" /> 10.7%</span> Last Month
                                    </h2>
                              </div>
                     </div>
                                   
                              
                               </div>

                 
                    
                  </div>
                  
              </div>

              <div className="col-span-4">
                  <SessionsByCountry/>
              </div>
              
          </div>

         <RecentOrders className=""/>
    </section>
  )
}

export default AdminHome
