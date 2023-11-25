import React from 'react'
import { FaHashtag, FaStar } from 'react-icons/fa'

export default function AuthorListItem({ rank, name, birth, dead, rating, published}) {
  return (
    <div className="w-full flex mb-5 items-center justify-around py-2">
        <div className="flex items-center">
          <FaHashtag className="w-6 h-6 text-blue-200" />
          <span className="text-2xl font-bold text-blue-200">{rank}</span>
        </div>
        <div className="flex items-center w-52">
          <p className="text-2xl text-white font-bold pl-4 pb-2">{name}</p>
        </div>
        <div className="flex items-center w-56 md:w-96 justify-between">
          <p className="text-sm text-gray-300 font-nunito pl-4 w-32">{birth} <span className="text-white">-</span> {dead ? dead : 'current'}</p>
          <p className="max-w-32 text-gray-300 font-nunito pl-4 flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
          </p>
          <p className="hidden md:block text-md text-gray-200 px-4">{published} published</p>
        </div>
    </div>
  )
}
