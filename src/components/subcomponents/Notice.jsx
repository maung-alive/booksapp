import React from 'react'

export default function Notice() {
  return (
        <div className="relative w-full h-auto bg-blue-950 px-5 md:px-7 lg:px-10 py-2 md:py-3 lg:py-4 my-4 md:my-6 lg:my-8 rounded-xl md:rounded-2xl lg:rounded-3xl flex justify-center items-center">
            <div>
                <p className="text-xl md:text-3xl lg:text-4xl py-3 font-medium text-white font-josefin">We are awarded top writer every month</p>
                <p className="text-sm md:text-md lg:text-lg py-2 leading-9 font-medium text-gray-300 font-dosis">Lorem ipsum dolor sit amet consectetur adipisicing de chat en garcons, redema ewl elit.</p>
                <div className="flex gap-x-2 py-2 md:gap-x-3 lg:py-4">
                    <button className="w-auto h-auto px-2 lg:px-4 py-1 md:py-2 bg-blue-900 hover:bg-transparent border-2 border-blue-900 hover:border-blue-800 text-white font-medium rounded md:rounded-md">This month winners</button>
                    <button className="w-auto h-auto px-2 lg:px-4 py-1 md:py-2 bg-transparent hover:bg-red-900 border-2 border-red-800 hover:border-red-900 text-white font-medium rounded md:rounded-md">close</button>
                </div>
            </div>
            <img src="/clip-education.png" alt="clip-education" className="w-[125px] h-[125px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] object-cover" />
        </div>
    )
}
