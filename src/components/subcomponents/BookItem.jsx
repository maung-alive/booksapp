import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

export default function BookItem() {
  return (
    <div className="w-full h-auto px-5 md:px-10 py-2 flex gap-2">
        <img src="/bookcv2.jpg" alt="Book Cover" className="w-[100px] h-[150px] object-cover" />
        <div className="pt-3">
            <p className="text-2xl py-2 font-medium text-black dark:text-white font-mukta">Book</p>
            <p className="text-md text-gray-600 dark:text-gray-400 font-josefins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-x-2 mt-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalf className="text-yellow-400" />
                <span className="text-gray-700 dark:text-gray-300 -mt-1 pl-3">(4.7)</span>
            </div>
        </div>
    </div>
    )
}
