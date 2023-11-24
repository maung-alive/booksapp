import React from 'react'
import { FaBars, FaCat, FaCogs, FaHome, FaSearch } from 'react-icons/fa'


export default function SideBar() {
  return (
    <side className="fixed top-0 left-0 rounded-3xl md:rounded-none md:block md:h-screen mt-2 md:m-0 mx-[2.5%] w-[95%] md:w-[17rem] bg-[rgba(15,23,42,0.4)] md:bg-slate-900 shadow-xl z-10">
        <p className="hidden md:block text-3xl py-16 px-3 text-white font-medium">Book</p>

        <div className="md:pl-4 md:py-0 flex justify-evenly py-1 md:block">
            <a href="" className="bg-slate-600 text-teal-400 leading-9 font-medium md:rounded-l-3xl block p-3 px-5 text-md md:pl-8 md:mb-5 rounded-3xl md:rounded-none">
                <FaHome className="inline-block w-6 h-6" /> <span className="px-5 hidden md:inline">Home</span>
            </a>
            <a href="" className="text-teal-400 leading-9 font-medium md:rounded-l-3xl block p-3 px-5 text-md md:pl-8 md:mb-5 rounded-3xl md:rounded-none">
                <FaSearch className="inline-block w-6 h-6" /> <span className="px-5 hidden md:inline">Discover</span>
            </a>
            <a href="" className="text-teal-400 leading-9 font-medium md:rounded-l-3xl block p-3 px-5 text-md md:pl-8 md:mb-5 rounded-3xl md:rounded-none">
                <FaCat className="inline-block w-6 h-6" /> <span className="px-5 hidden md:inline">Category</span>
            </a>
            <a href="" className="text-teal-400 leading-9 font-medium md:rounded-l-3xl block p-3 px-5 text-md md:pl-8 md:mb-5 rounded-3xl md:rounded-none">
                <FaCogs className="inline-block w-6 h-6" /> <span className="px-5 hidden md:inline">Settings</span>
            </a>
            <a href="" className="text-teal-300 leading-9 font-medium md:rounded-l-3xl block p-3 px-5 text-md md:pl-8 md:mb-5 rounded-3xl md:rounded-none">
                <FaBars className="inline-block w-6 h-6" /> <span className="px-5 hidden md:inline">Settings</span>
            </a>
        </div>

    </side>
  )
}
