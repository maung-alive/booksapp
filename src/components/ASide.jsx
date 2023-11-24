import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function ASide() {
  return (
    <aside className="hidden md:block fixed top-0 right-0 h-screen w-[22rem] bg-slate-900">
        <div className="px-3 py-3">
            <div className='bg-slate-700 rounded-xl w-full py-3 px-2'>
                <p className="text-2xl text-white py-4 px-2 font-medium">Detail</p>
                <div className="grid grid-cols-2 grid-rows-2 p-2 gap-y-4">
                    <div>
                        <p className="text-lg text-gray-200 font-medium">Pin</p>
                        <p className="text-md text-gray-100 font-medium">20</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-200 font-medium">Published</p>
                        <p className="text-md text-gray-100 font-medium">622</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-200 font-medium">Vote</p>
                        <p className="text-md text-gray-100 font-medium">1.3M</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-200 font-medium">Subcribers</p>
                        <p className="text-md text-gray-100 font-medium">1055</p>
                    </div>
                </div>
            </div>

            <p className="text-white px-2 py-4 flex justify-between font-medium"><span className="text-2xl">Achieves</span> <span className="hover:text-blue-400 my-2"><FaArrowRight className="w-4 h-4" /></span></p>
            <div className="w-full flex gap-5 items-start mb-3">
                <img src="/wer.jpg" alt="wer" className="bg-red-600 w-[80px] h-[125px] object-cover rounded-xl" />
                <div>
                    <p className="text-xl text-white font-medium">Achieve One</p>
                    <p className="text-lg text-gray-400 py-2">23 Books</p>
                    <p className="text-md text-gray-200">23 Books</p>
                </div>
            </div>
            <div className="w-full flex gap-5 items-start mb-3">
                <img src="/wer.jpg" alt="wer" className="bg-red-600 w-[80px] h-[125px] object-cover rounded-xl" />
                <div>
                    <p className="text-xl text-white font-medium">Achieve One</p>
                    <p className="text-lg text-gray-400 py-2">23 Books</p>
                    <p className="text-md text-gray-200">23 Books</p>
                </div>
            </div>
            <div className="w-full bg-blue-300 text-xl text-center my-2 h-36 rounded-lg">
            </div>
        </div>
    </aside>
  )
}
